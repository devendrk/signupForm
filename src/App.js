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
        {/*<SignIn />*/}
        <HomePage />
         {/*<SignOut/>
        <Feature /> featuer page after , signout will be here*/ }
      </div>

    )
  }
}


export default App