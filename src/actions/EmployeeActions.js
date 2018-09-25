import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_FIRE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // this is path to the json datastore; it is not url

  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeesFetch = () => {
  return (dispatch) => {
      // when we update a value into the employee form click back to employee list
    // and then again click on this employee we see the updated value
    // because of this code
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

//Scenes are adding into something like Stack so
// if we want to avoid adding more than once specific screen we use type : 'reset'
export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
    Actions.employeeList({ type: 'reset' });
  });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
    dispatch({ type: EMPLOYEE_FIRE_SUCCESS });
    Actions.employeeList({ type: 'reset' });
  });
  };
};
