import { injectReducer } from '../../store/reducers'
import { browserHistory } from 'react-router'
import { isLoggedIn } from '.././../helpers/AuthService';

export default (store) => ({
    path: 'new/post',
    getComponent (nextState, cb) {
        if(!isLoggedIn()){
          browserHistory.push('/login');
          return false;
        }
        require.ensure([], (require) => {
            const NewPost = require('./containers/NewContainer').default
            const reducer = require('./modules/new').default
            injectReducer(store, { key: 'new', reducer})
            cb(null, NewPost)
        })
    }
})
