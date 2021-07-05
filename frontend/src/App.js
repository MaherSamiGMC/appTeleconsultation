import './App.css';
import './fonts/font.css';

import { BrowserRouter as Router, Route,withRouter} from 'react-router-dom'
import React, { Fragment } from 'react'
import Header from './Components/LandingPage/Header'
import Footer from './Components/LandingPage/Footer'
import AccueilScreen from './Screens/LandingPage/AccueilScreen';
import ArticleScreen from './Screens/LandingPage/ArticleScreen';
import MainPage from './Screens/Dashboard/MainPage';
import LoginScreen from './Screens/LandingPage/LoginScreen';
import InscriScreen from './Screens/LandingPage/InscriScreen';
import MainDocPortal from './Screens/DocPortal/MainDocPortal';
import ScrollToTop from "react-scroll-to-top";
import ListOfPatients from './Screens/Dashboard/ListOfPatients';
import NewPatient from './Screens/Dashboard/NewPatient';
import Calendar from './Screens/Dashboard/Calendar';
import TeleConsultation from './Screens/Dashboard/TeleConsultation'
import VideoConsultation from './Screens/Dashboard/VideoConsultation';
import NewAssistant from './Screens/Dashboard/NewAssistant';


const App=withRouter(({location}) =>{
  return (
    <>
    <Route path='/Dashboard' component={MainPage} exact/>
    <Route path='/Portail' component={MainDocPortal}/>
    <Route path='/Dashboard/list-of-patients' component={ListOfPatients}/>
    <Route path='/Dashboard/new-patient' component={NewPatient}/>
    <Route path='/Dashboard/Calendar' component={Calendar}/>
    <Route path='/Dashboard/Message' component={TeleConsultation}/>
    <Route path='/Dashboard/Teleconsultation' component={VideoConsultation} />
    <Route path='/Dashboard/new-assistant' component={NewAssistant} />
    <Fragment>
      <ScrollToTop smooth/>
      {location.pathname !== '/Dashboard' && location.pathname !=='/Portail'&& location.pathname !=='/Dashboard/list-of-patients' && location.pathname !=='/Dashboard/new-patient' && location.pathname !=='/Dashboard/Calendar' && location.pathname !=='/Dashboard/Message' && location.pathname !=='/Dashboard/Teleconsultation' && location.pathname !=='/Dashboard/new-assistant' && <Header />}
        <Route path='/' component={AccueilScreen} exact/>
        <Route path='/Actualités/:id' component={ArticleScreen}/>
        <Route path='/inscription' component={InscriScreen} exact/>
        <Route path='/connexion' component={LoginScreen} exact/>
        

      {location.pathname !== '/Dashboard' && location.pathname !=='/Portail' && location.pathname !=='/Dashboard/list-of-patients' && location.pathname !=='/Dashboard/new-patient' && location.pathname !=='/Dashboard/Calendar' && location.pathname !=='/Dashboard/Message' && location.pathname !=='/Dashboard/Teleconsultation' && location.pathname !=='/Dashboard/new-assistant' && <Footer />}
    </Fragment>
    </>
  );
})

export default App;
