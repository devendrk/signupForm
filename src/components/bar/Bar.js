import React, { Component } from "react";
import { connect } from "react-redux";
import { reducer } from "../../store/reducer";
import { getFormValues } from 'redux-form';

import SignIn from '../modals/signIn/SignIn';
import SignUp from '../modals/signUpModel/SignUpModal';
import "./Bar.css";
import MappleLogo from "../../images/logo100x100.png";

class Bar extends Component {
  

  handleLogin = () => {
    let showSignInModel = '';
    const { getState } = this.props;
    showSignInModel= true
    getState(showSignInModel);
  };
  
  handleSignup = () => {
    let showSignInModel = '';
    const { getState } = this.props;
      showSignInModel= false
    getState(showSignInModel);
    };
  render(props) {
    const { signInValues, signUpValues } = this.props;

    return (
      <div className="bar">
        <div>
          <a
            rel="noopener noreferrer"
            className="mapple"
            href="https://mapple.io/"
            target="_blank"
          >
            <div className="titles no_select">
              <div className="title_main">
                <div className="logo">
                  <img src={MappleLogo} alt="mapple logo" />
                </div>
                <div className="title_main_text">MAPPLE</div>
                <div className="title_sub">Analyst</div>
              </div>
            </div>
          </a>
        </div>
        <SignIn onSubmit={() => {
          console.log(signInValues)
        }} />
        <SignUp  onSubmit={() => {
          console.log(signUpValues)
        }}/>
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: reducer(state),
  signInValues: getFormValues('signIn')(state),
  signUpValues: getFormValues('signUp')(state)
  // from redux form
});




export default connect(
  mapStateToProps,
)(Bar);
