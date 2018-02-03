/**
 *
 * Asynchronously loads the component for Encyclopedia
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
