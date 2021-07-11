import React,{useContext,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../../Components/LandingPage/Loader'
import Header from '../../Components/LandingPage/Header'
import Footer from '../../Components/LandingPage/Footer'
import { Getuserdetails, updateUserProfile } from '../../Redux/Actions/userActions'
import PortailPatient from '../../Components/DocPortal/PortailPatient'
import VideoPlayer from '../../Components/Dashboard/VideoPlayer';
import Options from '../../Components/Dashboard/Options';
import Notifications from '../../Components/Dashboard/Notifications';
import {makeStyles} from '@material-ui/core/styles'
import { SocketContext } from '../../SocketContext';
import { Button } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import { Col, Container, Row} from 'react-bootstrap'

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
    const {user}=userDetails
    const { me } = useContext(SocketContext);

    useEffect(()=>{
        if (!userInfo){
            history.push('/connexion')
        } else {
          dispatch(Getuserdetails('patient',userInfo.authPatient._id,'authPatient'))
        }
    },[dispatch,userInfo,history,user])

    return (
        <>  
            <Header />
            {Loader}
            
            <PortailPatient userdetails={user.getPatient} />
            <div className={classes.wrapper}>
              <Container className="appel">
                <Row>
                  <Col md={6}>
                    <h2 className="mb-5">Guide pour démarrer votre session de téléconsultation</h2>
                    <p className="text-justify pr-5">Merci de suivre les étapes ci-dessous pour bien commencer votre session de teleconsultation avec votre medecin soignant</p>
                    <h3 className="mb-4">Pour démarrer la téléconsultation :</h3>
                    <ol>
                      <li>Cliquer sur le bouton <b>"Je suis Disponible"</b>  </li>
                      <li>Attendre le lancement de la téléconsultation par votre medecin  </li>
                      <li>Une fois la session est initiée, Appuyer sur le bouton <b>"Répondre"</b> </li>
                      <li>A la fin de la session, Appuyer sur le bouton <b>"Terminer l'appel"</b> pour achever la session </li>
                    </ol>
                  </Col>
                  <Col md={6}>
                    <VideoPlayer nameId={user && user.getPatient && `${user.getPatient.firstName} ${user.getPatient.lastName}`} />
                    <Options thecaller={false} userInfo={userInfo}>
                        <Button variant="contained" 
                                color="#00e676" 
                                startIcon={<Phone fontSize="large" />} 
                                fullWidth onClick={() => dispatch(updateUserProfile('patient',userInfo.authPatient._id,'authPatient',{socketId:me}))} 
                                className={classes.margin}>
                                Je suis disponible
                        </Button>
                        <Notifications/>
                    </Options>
                  </Col>
                </Row>
              </Container>
            </div>
            <Footer />
        </>
    )
}

export default MainDocPortal
