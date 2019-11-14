import { LOGIN } from './action_types';

export const saveUserAction = user => {
  return {
    type: LOGIN,
    payload: user
  };
};
