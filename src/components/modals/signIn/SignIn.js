import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import "./SignIn.css";
import Button from "../../button";



class SignIn extends Component {
  
  renderInput({ input,label,type }){   
    return (
      
      <div className = "filed">
        <input {...input} placeholder = {label} />

      </div>
    )
  }

  onSubmit(formValues){
    console.log(formValues)
  }

  render() {
    return (
      <div className ="login-card">
            <div className = "login-header">
              {this.props.children}
             </div>
          <h3 className=" login-text">Log in</h3> <br />
          <form onSubmit = {this.props.handleSubmit(this.onSubmit)} >
              <Field name = "username" type = "text"label = "Username" component = {this.renderInput} /> <br /> <br />
              <Field name = "email"  type = "password"label = "password" component = {this.renderInput}/>
              <div className="btn-section">
                <Button className="custom-btn" label="Login"  type="submit" />
              </div>
            </form>
      </div>
    );
  }
}

export default reduxForm({
  form : 'signIn'
})(SignIn);





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
