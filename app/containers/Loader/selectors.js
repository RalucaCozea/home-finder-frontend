import { createSelector } from 'reselect';

export const selectLoaderState = () => createSelector(
  state => state.get('appLoader').toJS(),
  appLoader => appLoader.loading > 0
);
