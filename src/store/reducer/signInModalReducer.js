import { CHANGED_AUTH, CHECK_AUTH } from "../actions";
const initialState = {
  isLoggedIn: true,
  isAuthorized: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGED_AUTH:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case CHECK_AUTH:
      return {
        ...state,
        isAuthorized: action.payload
      };
    default:
      return state;
  }
}
