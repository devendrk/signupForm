import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import Button from "../../button";
import Modal from "react-modal";

class SignUp extends Component {
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
            <h1>SignUp</h1> <br />
            <form name="signUp" onSubmit={this.props.handleSubmit}>
              <Field
                component="input"
                type="text"
                name="user"
                placeholder="Username "
              />
              <Field
                component="input"
                type="text"
                name="email"
                placeholder="email "
                autoComplete = "password"
              />
              <Field
                component="input"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete = "password"
              />
              <div className="btn-section">
                <Button className="custom-btn" label="Sign up" type="submit" />
                <Button
                  className="custom-btn"
                  onClick={this.closeModel}
                  label="cancel"
                  type="button"
                />
              </div>
            </form>
          </Modal>
        ) : (
          <div className="bar-right-section">
            <Button
              className="custom-btn"
              label="signUp"
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
  form: "signUp"
})(SignUp);

export default signInForm;
