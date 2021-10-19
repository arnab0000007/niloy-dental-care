import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register'
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import ServiceProvider from './contexts/ServiceProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SingleService from './Pages/SingleService/SingleService';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ServiceProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
             <PrivateRoute path="/service/:serviceId"> 
              <SingleService></SingleService>
              </PrivateRoute> 
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </ServiceProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
