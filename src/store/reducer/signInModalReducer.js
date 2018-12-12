import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from '../../user';


const CHANGED_AUTH = "CHANGED_AUTH";
const CHECK_AUTH = "CHECK_AUTH";

const initialState = {
  isLoggedIn: true,
};

const signInModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_AUTH:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  form: formReducer,
  auth: signInModalReducer
});


export const getFormValues = state => state.form;
export const getAuth = state => state;



export const loginAuthAction = value => {
    return {
        type: CHANGED_AUTH,
        payload: value=== true ? false : true
      }
};

export const checkAuthAction = value => {
    console.log(user,value)
    return {
        type: CHECK_AUTH,
        payload: value.userName === user.userName && value.password === user.password ? true : false
    }
}