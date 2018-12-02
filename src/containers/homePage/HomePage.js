import React, { Component } from 'react';

import Bar from '../../components/bar/Bar';
import SignIn from '../../components/modals/signIn/SignIn';


class HomePag extends Component {
    render(props) {
        return (
            <div>
                <Bar />
                <SignIn />
            </div>
        );
    }
}



export default HomePag;
