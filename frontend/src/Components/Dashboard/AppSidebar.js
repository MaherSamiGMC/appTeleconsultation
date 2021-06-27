import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';


 function AppSidebar({userdetails}) {



    return (
      
<aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
        <a href="/Dashboard" className="brand-link">
          <img src="../images/dash_neardoctor.png" alt="NearDoctor Logo" className="mx-auto  d-flex" />
          {/* <span className="brand-text font-weight-light"> - </span> */}
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">{userdetails && `Dr. ${ userdetails.firstName} ${ userdetails.lastName}`}</a>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}


              <li className="nav-header">PATIENTS</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-user-plus" />
                  <p>
                    Ajouter nouveau patient
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-stream" />
                  <p>
                    Liste des patients
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                     Calendrier
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-video" />
                  <p>
                     Téléconsultation
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon far fa-file-alt" />
                  <p>
                     Consultation textuelle
                    {/* <span className="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              

              <li className="nav-header">ASSISTANT</li>
              <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                  <i className="nav-icon fas fa-user-plus" />
                  <p>Ajouter un assistant</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                  <i className="nav-icon fas fa-users-cog" />
                  <p>Modifier données de l'assistant</p>
                </a>
              </li>
              

              <li className="nav-header">GESTION CABINET</li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Modifier les paramètres du compte</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
      </aside>
    )
}

export default AppSidebar
