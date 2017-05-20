import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navs.scss'
import logoPurple from './assets/logo-purple.svg'


export const LoginNav = () => (
  <nav className="white shadow-nav-login">
   <div className="container nav-wrapper">
     <Link to='/' className="brand-logo font-weight-300 deep-purple-text">
       <img className='logo' src={logoPurple} /><small className='hide letra-12 grey-text font-weight-300'>gama v0.0.1</small>
     </Link>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
       <li>
         <Link to='/features' className='grey-text letra-12 font-weight-300'>
           features
         </Link>
       </li>
       <li>
         <Link to='/counter' className='grey-text letra-12 font-weight-300'>
           Contador
         </Link>
       </li>
       <li>
         <Link to='/login' className='deep-purple-text letra-12 font-weight-300'>
           Comenzar
         </Link>
       </li>
     </ul>
   </div>
 </nav>
)

export default LoginNav
