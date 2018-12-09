import { CHANGED_AUTH } from "../actions";
const initialState = {
  isLoggedIn: true
};

export default function (state = initialState, action) {
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
