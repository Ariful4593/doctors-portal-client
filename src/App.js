import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import ContactUs from './components/ContactUs/ContactUs';
import BlogsPage from './components/BlogsPage/BlogsPage'
import About from './components/Pages/About/About';
import DashboardPage from './components/Pages/DashboardPage/DashboardPage';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/dashboard-page">
            <DashboardPage></DashboardPage>
          </Route>
          <Route path="/Blogs">
            <BlogsPage></BlogsPage>
          </Route>
          <Route path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <PrivateRoute path="/adminpanel">
            <AdminPanel></AdminPanel>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
