import React, { Component } from 'react';

import Bar from '../../components/bar/Bar';
import SignIn from '../../components/modals/signIn/SignIn';


class HomePag extends Component {
    componentDidMount(){
        console.log(window);
    }
    render(props) {
        return (
            <React.Fragment>
                <Bar />
                <SignIn />
            </React.Fragment>
        );
    }
}



export default HomePag;
