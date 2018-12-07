import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from 'react-redux';

import {reducer} from '../../../store/reducer';

import Button from "../../button";
import Modal from "react-modal";
import "./SignIn.css";

Modal.setAppElement('body')

<<<<<<< HEAD
class SignIn extends Component {
  state = {
    isModelOpen: false
  };

  // componentDidMount() {
  //   Modal.setAppElement('body');
  // }
  
  openModel = () =>
    this.setState({
      isModelOpen: true
    });
  closeModel = () => {
    this.setState({
      isModelOpen: false
    });
  };

  render() {
    return (
      <div>
        {this.state.isModelOpen ? (
          <Modal
            className="login-card"
            isOpen={this.state.isModelOpen}
            isClosed={this.state.isModelOpen}
          >
            <h1>Log-in</h1> <br />
            <form name="signIn" onSubmit={this.props.handleSubmit}>
              <Field
                component="input"
                type="text"
                name="userName"
                placeholder=" email"
                autoComplete = "email"
              />
              <Field
                component="input"
                type="password"
                name="password"
                autoComplete = "password"
                placeholder="Password"
              />
              <div className="btn-section">
                <Button className="custom-btn btn-green" label="Sign In" type="submit" />
                <Button
                  className="custom-btn btn-red"
                  onClick={this.closeModel}
                  label="cancel"
                  type="button"
                />
              </div>
            </form>
            <div className="login-help">
              <a href="/">Register</a> • <a href="/">Forgot Password</a>
            </div>
          </Modal>
        ) : (
          <div className="bar-right-section ">
            <Button
              className="custom-btn "
              label="Login"
              type="submit"
              onClick={this.openModel}
            />
          </div>
        )}
=======
const SignIn = (props) => {
  const { signInValues } = props;
  return (
    <div className="login-card">
      <div className = "login-header">
        {props.children}
      </div>
      <h3 className=" login-text">Log in</h3> <br />
      <form name="signIn" onSubmit={props.handleSubmit}>
        <Field
          component="input"
          type="text"
          name="userName"
          placeholder=" username "
          autoComplete="username"
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
        <p>Need help ?  <a href = "/">  Hello@mapple.fi</a></p>
>>>>>>> 9dca66dd392ce65cc381382949aa52e666041541
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
