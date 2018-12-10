import user from '../../user';

export const CHANGED_AUTH = "CHANGED_AUTH";
export const CHECK_AUTH = "CHECK_AUTH";


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