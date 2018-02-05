import { createSelector } from 'reselect';

const selectGlobalDomain = () => (state) => state.get('global');

/**
 * Default selector used by BuildSchedule
 */

const selectGlobal = () =>
  createSelector(selectGlobalDomain(), (substate) => substate.toJS());

export default selectGlobal;

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, (routeState) =>
    routeState.get('location').toJS()
  );

export { makeSelectLocation };
