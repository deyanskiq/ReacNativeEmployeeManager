import firebase from 'firebase';

import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  //this is path to the json datastore; it is not url

  firebase.database.ref('/users/userId/employees');
};
