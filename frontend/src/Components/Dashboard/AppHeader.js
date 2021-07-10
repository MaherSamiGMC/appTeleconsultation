import React from 'react'
import { logout } from '../../Redux/Actions/userActions';
import { CButton } from '@coreui/react';
import {useDispatch} from 'react-redux'

function AppHeader() {
  const dispatch = useDispatch()
  const logoutHandler=()=>{
    dispatch(logout())
}
    return (
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">Accueil</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/contact" className="nav-link">Nous contacter</a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
        <li className="nav-header"><center><CButton onClick={logoutHandler}  color="danger" >Déconnexion</CButton></center></li>

          <li className="nav-item dropdown">
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>

        </ul>
      </nav>
    )
}

export default AppHeader
