import { fromJS } from 'immutable';

import schemas from 'schemas';
// import { upsertEntitySuccessType } from 'helpers/actions';

export const buildDefaultState = collection => fromJS(
  Object.keys(collection).reduce((acc, name) => ({
    ...acc,
    [collection[name].key]: {},
  }), {})
);

const defaultState = buildDefaultState(schemas);

export default (
  state = defaultState,
  { entities }
) => {
  // if (type.match(/DELETE_\w+_SUCCESS/)) {
  //   return state.set(
  //     entityKey,
  //     state.get(entityKey).remove(id.toString())
  //   );
  // }
  //
  // if (type === upsertEntitySuccessType(schemas.surveyResponse)) {
  //   return state.set(
  //     schemas.surveyResponse.key,
  //     state.get(schemas.surveyResponse.key).remove(result.toString())
  //   );
  // }
  //
  // if (type === upsertEntitySuccessType(schemas.event)) {
  //   const eventId = result.toString();
  //
  //   return state.setIn(
  //     [schemas.event.key, eventId],
  //     fromJS(entities[schemas.event.key][eventId])
  //   );
  // }

  if (entities) {
    return state.mergeDeep(fromJS(entities));
  }

  return state;
};
