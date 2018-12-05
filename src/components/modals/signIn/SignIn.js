import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from 'react-redux';

import {reducer} from '../../../store/reducer';

import Button from "../../button";
import Modal from "react-modal";
import "./SignIn.css";

Modal.setAppElement('body')

const SignIn = (props) => {
  const { signInValues } = props;
  return (
    <div className="login-card">
      <h3>Log-in</h3> <br />
      <form name="signIn" onSubmit={props.handleSubmit}>
        <Field
          component="input"
          type="text"
          name="userName"
          placeholder=" email"
          autoComplete="email"
        />
        <Field
          component="input"
          type="password"
          name="password"
          autoComplete="password"
          placeholder="Password"
        />
        <div className="btn-section">
          <Button className="custom-btn" label="Login"  type="submit" onClick={()=> console.log(signInValues)}/>
        </div>
      </form>
      <div className="login-help">
        <a href="/">Register</a> • <a href="/">Forgot Password</a>
      </div>
    </div>
  );
}


const mapStateToProps = state => ({
  text: reducer(state),
  signInValues: getFormValues('signIn')(state),
});


const signInForm = reduxForm({
  form: "signIn"
})(SignIn);

export default connect(mapStateToProps)(signInForm);
