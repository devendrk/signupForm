export const CHANGED_AUTH = "CHANGED_AUTH";


export const loginAuthAction = value => {
    return {
        type: CHANGED_AUTH,
        payload: value=== true ? false : true
      }
};

