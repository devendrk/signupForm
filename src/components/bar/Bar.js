import React, { Component} from 'react'
import './Bar.css';
import MappleLogo from '../../images/logo100x100.png';


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
             
        
                 
                
        
            </div>
          )
    }
  
 
}

export default Bar