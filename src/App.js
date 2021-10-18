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

import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path="/getappointment">
            <GetAppointment></GetAppointment>
          </PrivateRoute>
          <Route path="/loginsignup">
            <LoginSignUp></LoginSignUp>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
