import React, { Component } from 'react';
import Modal from 'react-modal';
import './SignupModal.css';

const inputParsers = {
    uppercase(input) {
    return input.toUpperCase();
    }
}
class SignupModal extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit (e){
        e.preventDefault()
        const data = new FormData(e.target)

        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        //   });
    }
            
    render() {
       
        
        return (
        
            <Modal 
                isOpen = {this.props.showModel}
                contentLabel= 'signUp'
                className="Modal"
                overlayClassName="Overlay"
        
                >
                <form  onSubmit={this.handleSubmit}>
                    <h3> Sign up Form</h3>
                    <input id="username" name="username" type="text" placeholder = "username"  required/>
                        
                    <input id="email" name="email" type="email" placeholder= "email" required/>
                        
                    <input id="password" name="password" type="password" placeholder = "password"  required/>
                        
                    <button className= "submit-button">SignUp</button> 
                </form>
                </Modal>    
            
        );
    }
}

export default SignupModal;

