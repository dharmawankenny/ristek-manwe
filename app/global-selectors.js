import { createSelector } from 'reselect';

/**
 * Direct selector to the register state domain
 */
const selectGlobalDomain = (state) => state.get('global');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Register
 */

const makeSelectGlobal = () => createSelector(
  selectGlobalDomain,
  (substate) => substate.toJS()
);

export default makeSelectGlobal;
export {
  selectGlobalDomain,
};
