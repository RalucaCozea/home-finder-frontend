import { AUTH_TOKEN_KEY } from './constants';

const save = token => localStorage.setItem(AUTH_TOKEN_KEY, token);

const get = () => localStorage.getItem(AUTH_TOKEN_KEY);

const destroy = () => localStorage.removeItem(AUTH_TOKEN_KEY);

export default {
  save,
  get,
  destroy,
};
