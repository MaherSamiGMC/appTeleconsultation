import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import AppSidebar from '../../Components/Dashboard/AppSidebar'
import AppHeader from '../../Components/Dashboard/AppHeader'
import AppTelmess from '../../Components/Dashboard/AppTelmess'
import AppFooter from '../../Components/Dashboard/AppFooter'
import { Getuserdetails } from '../../Redux/Actions/userActions'



const TeleConsultation = ({history}) => {
    const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo}=userLogin
  const userDetails = useSelector(state => state.userDetails)
  const {Loading,error,user}=userDetails
  useEffect(()=>{

    if (!userInfo){
        history.push('/connexion')
    } else {
      dispatch(Getuserdetails('doctor',userInfo.authDoctor._id,"authDoctor"))
    }
},[dispatch,userInfo,history])


    return (
        <div className="skin-blue sidebar-mini">
        <div  className="wrapper" > 
                <AppHeader/>
                <AppSidebar/>
                <AppTelmess userdetails={user.getDoctor}/>
                <AppFooter/>
        </div>
    </div>
    )
}

export default TeleConsultation
