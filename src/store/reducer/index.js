import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signInModalReducer from '../reducer/signInModalReducer';


export const reducer = combineReducers({
    form: formReducer,
    auth: signInModalReducer
});


export const getFormValues = state => state.form;
export const getAuth = state => state.auth.isLoggedIn;