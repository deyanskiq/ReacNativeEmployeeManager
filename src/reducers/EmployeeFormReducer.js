import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_FIRE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    //action.payload === { prop: 'name', value: 'jane'}
    //[action.payload.prop] is not an array; it is called key interpolation;
    // [action.payload.prop] this can have different values like: name,phone, shift, etc.

    // without ES6 syntaxis
    // const newState = {}
    // newState[action.payload.prop] = action.payload.value
    // return {...state, ...newState};
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_FIRE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
