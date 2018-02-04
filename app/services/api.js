import defaults from 'superagent-defaults';
import {
  // API_USER_PROFILE,
  // API_SUBMISSIONS,
  API_DATE_TIME,
} from 'common/routing';

const request = defaults();

export default request;

export function fetchServerTime() {
  return request.get(API_DATE_TIME);
}
