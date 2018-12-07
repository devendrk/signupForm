import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import Button from "../../button";
import Modal from "react-modal";
import "./SignIn.css";

Modal.setAppElement('body')

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
      </div>
    );
  }
}

const signInForm = reduxForm({
  form: "signIn"
})(SignIn);

export default signInForm;
