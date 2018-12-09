import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Modal from "react-modal";
import { connect } from "react-redux";

import "./SignIn.css";
import Button from "../../button";
import { getAuth } from "../../../store/reducer";
import * as actions from "../../../store/actions";

class SignIn extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error-message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="filed">
        <input {...input} placeholder={label} type={label} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit=()=>{
    const { loginAuthAction, loginState } = this.props;
    loginAuthAction(loginState);
    
  }

  render() {
    const { loginState } = this.props
    return (
      <Modal isOpen={loginState} className="login-card">
        <div className="login-header">{this.props.children}</div>
        <h5>Turku</h5>

        <h3 className=" login-text">Log in</h3>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="userName"
            type="text"
            label="Username"
            component={this.renderInput}
          />
          <Field
            name="password"
            type="password"
            label="password"
            component={this.renderInput}
          />
          <div className="btn-section">
            <Button className="custom-btn" label="Login" type="submit" />
          </div>
          <div className="login-help">
            <p>
              Need help ? <a href="/"> Hello@mapple.fi</a>
            </p>
          </div>
        </form>
      </Modal>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.userName) {
    errors.userName = "you must enter the username";
  }

  if (!formValues.password) {
    errors.password = "you must enter the password";
  }

  return errors;
};
const mapStateToProps = state => ({
  loginState: getAuth(state),
});

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: "signIn",
    validate
  })(SignIn)
);

// import React from "react";
// import { Field, reduxForm, getFormValues } from "redux-form";
// import { connect } from 'react-redux';

// import {reducer} from '../../../store/reducer';

// import Button from "../../button";
// import "./SignIn.css";

// const SignIn = (props) => {

//   const { signInValues } = props;
//   return (
//     <div className="login-card">
//       <div className = "login-header">
//         {props.children}
//       </div>
//       <h3 className=" login-text">Log in</h3> <br />
//       <form name="signIn" onSubmit={props.handleSubmit}>
//         <Field
//           component="input"
//           type="text"
//           name="userName"
//           placeholder=" username "
//           autoComplete="username"
//         />
//         <Field
//           component="input"
//           type="password"
//           name="password"
//           autoComplete="password"
//           placeholder="Password"
//         />
//         <div className="btn-section">
//           <Button className="custom-btn" label="Login"  type="submit" onClick={()=> alert(signInValues)}/>
//         </div>
//       </form>
//       <div className="login-help">
//         <p>Need help ?  <a href = "/">  Hello@mapple.fi</a></p>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   text: reducer(state),
//   signInValues: getFormValues('signIn')(state),
// });

// const signInForm = reduxForm({
//   form: "signIn"
// })(SignIn);

// export default connect(mapStateToProps)(signInForm);
