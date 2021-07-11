import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import AppSidebar from '../../Components/Dashboard/AppSidebar'
import AppHeader from '../../Components/Dashboard/AppHeader'
import AppUpdateAssistant from '../../Components/Dashboard/AppUpdateAssistant'
import AppFooter from '../../Components/Dashboard/AppFooter'
import { Getuserdetails } from '../../Redux/Actions/userActions'


const UpdateAssistant = ({history}) => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const userDetails = useSelector(state => state.userDetails)
    const {user}=userDetails
  useEffect(()=>{

    if (!userInfo){
        history.push('/connexion')
    } else {
      dispatch(Getuserdetails('doctor',userInfo.authDoctor._id,"authDoctor"))
    }
},[dispatch,userInfo,history])

    return (
        <>
            <div className="skin-blue sidebar-mini">
                <div  className="wrapper" > 
                        <AppHeader/>
                        <AppSidebar userdetails={user.getDoctor} />
                        <AppUpdateAssistant userdetails={user.getDoctor} />
                        <AppFooter/>

                </div>
            </div>
        </>
    )
}

export default UpdateAssistant
