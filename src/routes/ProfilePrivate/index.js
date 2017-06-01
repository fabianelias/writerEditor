import { injectReducer } from '../../store/reducers'
import { browserHistory } from 'react-router'
import { isLoggedIn } from '.././../helpers/AuthService';

export default (store) => ({
    path: '@:identifierUser',
    getComponent (nextState, cb) {
        if(!isLoggedIn()){
          browserHistory.push('/login');
          return false;
        }
        require.ensure([], (require) => {
            const Profile = require('./containers/ProfileContainer').default
            const reducer = require('./modules/profile').default
            injectReducer(store, { key: 'profile', reducer})
            cb(null, Profile)
        })
    }
})
