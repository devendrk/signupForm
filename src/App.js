import React from 'react';
import Bar from './components/bar/Bar';
 import SignIn from './components/modals/signIn/SignIn';
// import SignOut from './components/signOut/SignOut';
// import Feature from './components/Feature/Feature';

import './app.css'



const App =()=>(
      <div className="app">
        <div className="login-container">
          <SignIn>
            <Bar />
          </SignIn>
          
        </div>
         {/*
        <Feature /> featuer page after sign in */ }
      </div>

    )
export default App