/*import { browserHistory } from 'react-router'
import { isLoggedIn } from '.././../helpers/AuthService';

export default () => ({
  path: 'explore',
  getComponent (nextState, cb) {
    if(!isLoggedIn()){
      browserHistory.push('/login');
      return false;
    }
    require.ensure([], (require) => {
      const PageNotFound = require('./components/ExploreView').default
      cb(null, PageNotFound)
    })
  }
})
*/

import { injectReducer } from '../../store/reducers'
import { browserHistory } from 'react-router'
import { isLoggedIn } from '.././../helpers/AuthService';

export default (store) => ({
    path: 'explore',
    getComponent (nextState, cb) {
        if(!isLoggedIn()){
          browserHistory.push('/login');
          return false;
        }
        require.ensure([], (require) => {
            const Explore = require('./containers/ExploreContainers').default
            const reducer = require('./modules/explore').default
            injectReducer(store, { key: 'explore', reducer})
            cb(null, Explore)
        })
    }
})
