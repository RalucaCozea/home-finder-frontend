import { fromJS } from 'immutable';

import { SHOW_LOADER, HIDE_LOADER } from './constants';


const showLoaderActions = [
  SHOW_LOADER,
];
const hideLoaderActions = [
  HIDE_LOADER,
];

const initialState = fromJS({
  loading: 0,
});

export default (state = initialState, action) => {
  if (showLoaderActions.includes(action.type)) {
    return state.merge(fromJS({ loading: state.get('loading') + 1 }));
  }

  if (hideLoaderActions.includes(action.type)) {
    return state.merge(fromJS({ loading: state.get('loading') - 1 }));
  }

  return state;
};
