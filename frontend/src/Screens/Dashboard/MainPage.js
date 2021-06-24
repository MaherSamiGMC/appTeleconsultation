import React from 'react'
import AppSidebar from '../../Components/Dashboard/AppSidebar'
import AppHeader from '../../Components/Dashboard/AppHeader'
import AppFooter from '../../Components/Dashboard/AppFooter'
import {CContainer,CCol } from '@coreui/react'

const MainPage = () => {
  return (
    <CContainer fluid >
        <CCol sm="auto">
            <AppSidebar/>
        </CCol>
        <CCol sm="auto">

        </CCol>
 
    </CContainer>
  )
}

export default MainPage