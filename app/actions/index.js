// import { NavigationActions } from 'react-navigation';
import {
   EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (text) => {
   return {
      type: EMAIL_CHANGED,
      payload: text
   };
};

export const passwordChanged = (text) => {
   return {
      type: PASSWORD_CHANGED,
      payload: text
   };
};

export const loginUser = ({ email, password }) => {
   return (dispatch) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { email, password } });
      };
};

// export function changeAppRoot(root) {
//   return {
//     type: types.ROOT_CHANGED,
//     root: root
//   };
// }
// export function appInitialized() {
//   return async function(dispatch, getState) {
//     // since all business logic should be inside redux actions
//     // this is a good place to put your app initialization code
//     dispatch(changeAppRoot('login'));
//   };
// }
// export function login() {
//   return async function(dispatch, getState) {
//     // login logic would go here, and when it's done, we switch app roots
//     dispatch(changeAppRoot('after-login'));
//   };
// }
