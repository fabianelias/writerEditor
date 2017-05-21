import { browserHistory } from 'react-router'
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
