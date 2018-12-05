import React from 'react';
import Bar from './components/bar/Bar';
import SignIn from './components/modals/signIn/SignIn';

import './app.css'

const App = (props) => (
  <div className="app">
    <Bar />
    <div className="login-container">
      <SignIn onSubmit={()=>(props.handleSubmit)}/>
    </div>
  </div>

)
export default App