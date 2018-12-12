import React from "react";
import { connect } from "react-redux";
import { getAuth, loginAuthAction } from "../../store/reducer/signInModalReducer";
import Bar from "../bar/Bar";
import Button from "../button";
import "./Feature.css";

const Feature = ({ isLoggedIn  }) => {
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
  isLoggedIn: getAuth(state.auth.isLoggedIn)
});

export default connect(mapStateToProps, loginAuthAction)(Feature);
