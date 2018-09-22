import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from '../actions/types';

const INITIAL_STATE = {
  //this is not necessary but it is a good practise
   email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    // this will return new object will propery state and email
    // and if the state propery has propery email, it will override it with value
    // action.payload

    //this is necessary because if we just return state.email = action.payload
    // redux won't recognise that state has new value and react won't update
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
