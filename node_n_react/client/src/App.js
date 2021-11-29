//import logo from './logo.svg';
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

function App() {
  return (
    <Router>
      <div>

        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Routes>
          <Route exact={true} path={"/"} element={<LandingPage/>} />
          <Route exact={true} path={"/login"} element={<LoginPage/>} />  
          <Route exact={true} path={"/register"} element={<RegisterPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

//admin user만 사용하게 하고 싶으면 Auth(페이지, null, true) -> true값을 마지막에 지정시켜주면 됨

export default App;

