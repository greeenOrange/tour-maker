import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Booking/Firebase/Firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const signInWithGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .finally(() => setIsLoading(false))
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    },[])
    const LogOut = () =>{
        setIsLoading(true)
            signOut(auth)
            .then(() =>{})
            .finally(() => setIsLoading(false))
    }

    return{
        user,
        isLoading,
        signInWithGoogle,
        LogOut
    }
}

export default useFirebase;