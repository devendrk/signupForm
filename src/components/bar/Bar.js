import React, { Component} from 'react'
import './Bar.css';
import MappleLogo from '../../images/logo100x100.png';

import SignupModal from '../modals/SignupModal';

class Bar extends Component {

    state = { 
        showModel: false
    };

    handleLogin = ()=>{
        this.setState({
            showModel: !this.state.showModel
        })
    }

    handleSignup = ()=> {
        this.setState({
        showModel: !this.state.showModel
    })
    }
    render(){
        return (
            <div className='bar'>
                <a rel="noopener noreferrer" className="mapple" href="https://mapple.io/" target="_blank">
                    <div className="titles no_select">
                        <div className="title_main">
                            <div className="logo">
                                <img src={MappleLogo} alt='mapple logo' />
                            </div>
                            <div className="title_main_text">MAPPLE</div>
                            <div className="title_sub">Analyst</div>  
                        </div>
                    </div>
                </a> 
                <button onClick = {this.handleLogin} className="login-right  ">log in</button>  
                <button onClick = {this.handleSignup} className="login-right  ">sign up </button>
                <SignupModal showModel = {this.state.showModel}
                />
        
                 
                
        
            </div>
          )
    }
  
 
}

export default Bar