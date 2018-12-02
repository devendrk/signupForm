import React, { Component } from 'react';
import HomePage  from './containers/homePage/HomePage';
// import SignIn from './components/modals/signIn/SignIn';
// import SignOut from './components/signOut/SignOut';
// import Feature from './components/Feature/Feature';





class App extends Component {
  state = {

  }


  render() {
    return (
      <div>
        <HomePage />
         {/*
        <Feature /> featuer page after sign in */ }
      </div>

    )
  }
}


export default App