import { injectReducer } from '../../store/reducers'
import { browserHistory } from 'react-router'
import { isLoggedIn } from '.././../helpers/AuthService';

export default (store) => ({
    path: 'my-job',
    getComponent (nextState, cb) {
        if(!isLoggedIn()){
          browserHistory.push('/login');
          return false;
        }
        require.ensure([], (require) => {
            const MyJob = require('./containers/MyJobContainer').default
            const reducer = require('./modules/myjob').default
            injectReducer(store, { key: 'job', reducer})
            cb(null, MyJob)
        })
    }
})
