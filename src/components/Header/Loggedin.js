import React from 'react'
import { browserHistory, IndexLink, Link } from 'react-router'

// import helpers
import { getInfoUser , logoutHelper } from '.././../helpers/AuthService';
import './Navs.scss'
import logo from './assets/logo.svg'

const info = JSON.parse(getInfoUser());


function logout(){
  const removeSession = logoutHelper();
  if (removeSession) {
    browserHistory.push('/')
  } else {
    Materialize.toast('Ocurrio un error intentelo nuevamente.', 2000);
    return false;
  }
}
export const LoggedNav = () => (
  <div className='' id='navMaster'>
    <nav className="deep-purple shadow-nav-logged">
     <div className="container nav-wrapper">
       <Link to='/explore' className="brand-logo font-weight-300 white-text">
         <img className='logo' src={logo} /><small className='hide letra-12 grey-text font-weight-300'>gama v0.0.1</small>
       </Link>
       <ul id="nav-mobile" className="right hide-on-med-and-down">
         <li>
           <Link to='/explore' className='white-text letra-12 font-weight-300'>
             Explora
           </Link>
         </li>
         <li>
           <Link to='/my-job' className='white-text letra-12 font-weight-300'>
             Mi trabajo
           </Link>
         </li>
         <li>
           <Link to='/new/post' className='btn btn-flat btn-new-post white-text letra-12 font-weight-300'>
             Nuevo
           </Link>
         </li>
         <li>
           <Link to='/login' className='grey-text letra-12 font-weight-300'>
             <div className="chip">
              Hola @{info.username}
            </div>
           </Link>
         </li>
         <li>
           <Link to='#' onClick={logout} className='grey-text letra-12 font-weight-300'>
             salir
           </Link>
         </li>
       </ul>
     </div>
   </nav>
  </div>
)

export default LoggedNav
