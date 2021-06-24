import React from 'react'
import AppSidebar from '../../Components/Dashboard/AppSidebar'
import AppHeader from '../../Components/Dashboard/AppHeader'
import AppDashboard from '../../Components/Dashboard/AppDashboard'
import AppFooter from '../../Components/Dashboard/AppFooter'

const MainPage = () => {
  return (
      <div className="skin-blue sidebar-mini">
        <div  className="wrapper" > 
        <AppHeader/>
        <AppSidebar/>
        <AppDashboard/>
        <AppFooter/>
        </div>
    </div>
  )
}

export default MainPage