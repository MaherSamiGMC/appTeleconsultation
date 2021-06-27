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

const App=withRouter(({location}) =>{
  return (
    <>
    <Route path='/Dashboard' component={MainPage}/>
    <Route path='/Portail' component={MainDocPortal}/>

    <Fragment>
      {location.pathname !== '/Dashboard' && location.pathname !=='/Portail'  && <Header />}
        <Route path='/' component={AccueilScreen} exact/>
        <Route path='/Actualités/:id' component={ArticleScreen}/>
        <Route path='/inscription' component={InscriScreen} exact/>
        <Route path='/connexion' component={LoginScreen} exact/>
      {location.pathname !== '/Dashboard' && location.pathname !=='/Portail' && <Footer />}
    </Fragment>
    </>
  );
})

export default App;
