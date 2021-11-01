import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Header from './Pages/Header/Header';
import Booking from './Pages/Booking/Booking';
import AddService from './AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './AddService/MyOrder';


function App() {
  return (
    <div className="App">
   <AuthProvider>
<Router>
<Header></Header>
  <Switch>
    <Route exact path='/'>
     <Home></Home>
    </Route>
    <Route path='/home'>
     <Home></Home>
    </Route>
    <Route path='/login'>
     <Login></Login>
    </Route>
    <PrivateRoute path='/booking/:id'>
     <Booking></Booking>
    </PrivateRoute>
    <Route path='/addservice'>
     <AddService></AddService>
    </Route>
    <Route path='/manageservices'>
     <ManageServices></ManageServices>
    </Route>
    <Route path='/order'>
     <MyOrder></MyOrder>
    </Route>
    <Route path='*'>
     <Error></Error>
    </Route>
  </Switch>
</Router>
</AuthProvider>
    </div>
  );
}

export default App;
