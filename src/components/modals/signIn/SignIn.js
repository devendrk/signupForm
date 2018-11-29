import React from 'react';
import'./SignIn.css';

const SignIn = () => {
    return (
        <div className ="login-card">
            <h1>Log-in</h1> <br />
            <form>
                <input type="text" name="user" placeholder="Username"/>
                <input type="password" name="pass" placeholder="Password"/>
                <input type="submit" name="login" className ="login login-submit" value="login"/>
            </form>
    
            <div className ="login-help">
                <p >Register</p> • <p >Forgot Password</p>
            </div>
        </div>
    );
};

export default SignIn;