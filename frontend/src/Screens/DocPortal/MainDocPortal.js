import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../../Components/LandingPage/Loader'
import Header from '../../Components/LandingPage/Header'
import Footer from '../../Components/LandingPage/Footer'
import { Getuserdetails } from '../../Redux/Actions/userActions'
import PortailPatient from '../../Components/DocPortal/PortailPatient'
import VideoPlayer from '../../Components/Dashboard/VideoPlayer';
import Options from '../../Components/Dashboard/Options';
import Notifications from '../../Components/Dashboard/Notifications';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

const MainDocPortal = ({ history }) => {
    const classes=useStyles()
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
            <div className={classes.wrapper}>
            <PortailPatient userdetails={user.getPatient} />
            <VideoPlayer nameId={user && user.getPatient && `${user.getPatient.firstName} ${user.getPatient.lastName}`} />
                    <Options thecaller={false}>
                        <Notifications/>
                    </Options>
            </div>
            <Footer />
        </>
    )
}

export default MainDocPortal
