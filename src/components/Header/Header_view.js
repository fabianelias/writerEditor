import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import LoginNav from './Login'
import LoggedNav from './Loggedin'

// imports helpers
import { isLoggedIn } from '.././../helpers/AuthService';

export const Header = () => (
  <header>
      {
       ( !isLoggedIn() ) ? <LoginNav /> :  <LoggedNav />
      }
  </header>
)

export default Header
