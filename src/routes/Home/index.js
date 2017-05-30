import HomeView from './components/HomeView'
import { browserHistory } from 'react-router'
import { isLoggedIn } from '.././../helpers/AuthService';
// Sync route definition
if(!isLoggedIn()){
  browserHistory.push('/login');
}
export default {
  component: HomeView
}
