import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../store/reducer";
import * as action from '../../store/actions';
import Bar from "../bar/Bar";
import Button from "../button";
import "./Feature.css";

const Feature = ({ isLoggedIn, loginAuthAction }) => {
return !isLoggedIn && (
      <div>
        <Bar>
          <Button label="Log Out" onClick = {()=>loginAuthAction(isLoggedIn)} />
        </Bar>
        <div>
          <h3>this is a feature</h3>
          <p>customer will see on after log in</p>
        </div>
      </div>
    );
    
};

const mapStateToProps = state => ({
  isLoggedIn: getAuth(state)
});

export default connect(mapStateToProps, action)(Feature);
