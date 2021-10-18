import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import GetAppointment from './pages/GetAppointment/GetAppointment';
import Home from './pages/Home/Home/Home';
import LoginSignUp from './pages/LoginSIgnUp/LoginSignUp';
import NotFound from './pages/NotFound/NotFound';
import Doctors from './pages/OurDoctors/Doctors/Doctors';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './pages/Home/Services/Services';
import Departments from './pages/Home/Departments/Departments';
import Faqs from './pages/Home/Faqs/Faqs';

function App() {
  return (

    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/doctors">
          <Doctors></Doctors>
        </Route>
        <Route path="/getappointment">
          <GetAppointment></GetAppointment>
        </Route>
        <Route path="/loginsignup">
          <LoginSignUp></LoginSignUp>
        </Route>
        <Route path="/:serviceId">
          <ServiceDetails></ServiceDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
    </BrowserRouter>


  );
}

export default App;
