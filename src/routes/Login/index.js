import { browserHistory } from 'react-router'

import { injectReducer } from '../../store/reducers'
import { isLoggedIn } from '.././../helpers/AuthService';

export default (store) => ({
  path: 'login',
  getComponent (nextState, cb) {
    if(isLoggedIn()){
      browserHistory.push('/explore');
      return false;
    }
    require.ensure([], (require) => {
      const Login = require('./containers/LoginContainer').default
      const reducer = require('./modules/login').default
      injectReducer(store, { key: 'login', reducer })
      cb(null, Login)
    })
  }
})
