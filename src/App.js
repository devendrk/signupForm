import React from "react";
import { connect } from "react-redux";


import Logo from "./components/logo";
import SignIn from "./components/modals/signIn/SignIn";
// import SignOut from './components/signOut/SignOut';
import Feature from "./components/Feature/Feature";
import { getAuth } from "./store/reducer";

import "./app.css";

const App = ({ isLoggedIn }) => {
  return (
    <div className="app">
      {isLoggedIn ? (
        <div className="login-container">
          <SignIn>
            <Logo />
          </SignIn>
        </div>
      ) : (
        <Feature />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: getAuth(state)
});

export default connect(mapStateToProps)(App);
