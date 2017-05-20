import { injectReducer } from '../../store/reducers'
import { browserHistory } from 'react-router'
import { isLoggedIn } from '.././../helpers/AuthService';

export default (store) => ({
    path: 'post/:identifierPost',
    getComponent (nextState, cb) {
        if(!isLoggedIn()){
          browserHistory.push('/login');
          return false;
        }
        require.ensure([], (require) => {
            const Post = require('./containers/PostContainer').default
            const reducer = require('./modules/post').default
            injectReducer(store, { key: 'post', reducer})
            cb(null, Post)
        })
    }
})
