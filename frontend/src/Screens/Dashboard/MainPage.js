import React from 'react'
import AppSidebar from '../../Components/Dashboard/AppSidebar'
import AppHeader from '../../Components/Dashboard/AppHeader'
import AppFooter from '../../Components/Dashboard/AppFooter'
import {CContainer} from '@coreui/react'

const MainPage = () => {
  return (
    <CContainer>
      <AppSidebar/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {/* <AppHeader /> */}
        <div className="body flex-grow-1 px-3">
        </div>
        {/* <AppFooter /> */}
      </div>
    </CContainer>
  )
}

export default MainPage