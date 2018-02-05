/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const CHANGE_USER_DATA = 'app/App/CHANGE_USER_DATA';
export const CHANGE_USER_PROFILE = 'app/App/CHANGE_USER_PROFILE';
export const LOG_OUT = 'app/App/LOG_OUT';

export const LOADING = 'app/App/LOADING';
export const LOADING_DONE = 'app/App/LOADING_DONE';
export const LOADING_ERR = 'app/App/LOADING_ERR';

export const LOAD_SERVER_TIME = 'app/App/LOAD_SERVER_TIME';
export const LOAD_SERVER_TIME_SUCCESS = 'app/App/LOAD_SERVER_TIME_SUCCESS';

// export const FETCH_INITIAL_DATA = 'app/App/FETCH_INITIAL_DATA';
// export const FETCH_INITIAL_DATA_SUCCESS = 'app/App/FETCH_INITIAL_DATA_SUCCESS';
export const INCREMENT_TIME = 'app/App/INCREMENT_TIME';

export const FLASH_MESSAGE = 'app/App/FLASH_MESSAGE';

export const API_BASE = 'http://ristek.cs.ui.ac.id/oprec/api/v1/';
export const API_USER_PROFILE = 'user-profile/';
export const API_SECTIONS = 'sections/';
export const API_SUBMISSIONS = 'submissions/';
export const API_DATE_TIME = 'date-time/';
