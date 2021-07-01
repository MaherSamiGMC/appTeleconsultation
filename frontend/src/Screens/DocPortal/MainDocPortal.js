import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../../Components/LandingPage/Loader'
import Header from '../../Components/LandingPage/Header'
import Footer from '../../Components/LandingPage/Footer'
import { Getuserdetails } from '../../Redux/Actions/userActions'
import PortailPatient from '../../Components/DocPortal/PortailPatient'


const MainDocPortal = ({ history }) => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const userDetails = useSelector(state => state.userDetails)
    const {Loading,error,user}=userDetails

    useEffect(()=>{

        if (!userInfo){
            history.push('/connexion')
        } else {
          dispatch(Getuserdetails('patient',userInfo.authPatient._id,'authPatient'))
        }
    },[dispatch,userInfo,history])

    return (
        <>  
            <Header />
            {Loader}
            <PortailPatient userdetails={user.getPatient} />
            <Footer />
        </>
    )
}

export default MainDocPortal
