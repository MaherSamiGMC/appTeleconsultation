import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import {
  Link
} from "react-router-dom";
import { CButton } from '@coreui/react';
import {useDispatch} from 'react-redux'
import { logout } from '../../Redux/Actions/userActions';


 function AppSidebar({userdetails}) {
   const dispatch = useDispatch()
  const logoutHandler=()=>{
    dispatch(logout())
}
    return (
      
<aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
        <a href="/Dashboard" className="brand-link">
          <img src="../images/dash_neardoctor.png" alt="NearDoctor Logo" className="mx-auto  d-flex" />
          {/* <span className="brand-text font-weight-light"> - </span> */}
        </a>
        {/* Sidebar */}
        <div className="sidebar sidebar-dash">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="https://images.emojiterra.com/google/android-oreo/512px/1f468-1f3fb-2695.png" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <Link to="/Dashboard" className="d-block">{userdetails && `Dr. ${ userdetails.firstName} ${ userdetails.lastName}`} </Link>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}


              <li className="nav-header">PATIENTS</li>
              <li className="nav-item">
                <Link to="/Dashboard/new-patient" className="nav-link">
                  <i className="nav-icon fas fa-user-plus" />
                  <p>
                    Ajouter nouveau patient
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Dashboard/list-of-patients" className="nav-link">
                  <i className="nav-icon fas fa-stream" />
                  <p>
                    Liste des patients
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Dashboard/Calendar" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                     Calendrier
                    <span className="badge badge-info right">{userdetails && userdetails.patients.map(el=>el.appointments).flat().length}</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="/Dashboard/Teleconsultation" className="nav-link">
                  <i className="nav-icon fas fa-video" />
                  <p>
                     Téléconsultation
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/Dashboard/Message" className="nav-link">
                  <i className="nav-icon far fa-file-alt" />
                  <p>
                     Consul. textuelle
                    <span className="badge badge-info right">{userdetails && userdetails.patients.map(el=>el.messages.map(x=>{return {...x,firstName:el.firstName,lastName:el.lastName,email:el.email,phoneNumber:el.phoneNumber,id:el._id}})).flat().filter(el=>el.response==='').length}</span> 
                  </p>
                </Link>
              </li>
              

              <li className="nav-header">ASSISTANT</li>
              {userdetails && userdetails.assistant===null  && 
              <li className="nav-item">
                <Link to="/Dashboard/new-assistant" className="nav-link">
                  <i className="nav-icon fas fa-user-plus" />
                  <p>Ajouter un assistant</p>
                </Link>
              </li>}

              {userdetails && userdetails.assistant!==null && 
                <li className="nav-item">
                <Link to="/Dashboard/modif-assistant" className="nav-link">
                  <i className="nav-icon fas fa-users-cog" />
                  <p>Modifier données de l'assistant</p>
                </Link>
              </li>}
              

              <li className="nav-header">GESTION CABINET</li>

              <li className="nav-item">
                <Link to='/Dashboard/modif-compte' className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Modifier les paramètres du compte</p>
                </Link>
              </li>
              <li className="nav-header"><center><CButton onClick={logoutHandler}  color="danger" shape="rounded-pill">Déconnexion</CButton></center></li>

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
      </aside>
    )
}

export default AppSidebar
