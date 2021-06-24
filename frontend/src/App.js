import './App.css';
import './fonts/font.css';

import { BrowserRouter as Router, Route} from 'react-router-dom'
import React, { Fragment } from 'react'
import Header from './Components/LandingPage/Header'
import Footer from './Components/LandingPage/Footer'
import AccueilScreen from './Screens/LandingPage/AccueilScreen';
import ArticleScreen from './Screens/LandingPage/ArticleScreen';
import MainPage from './Screens/Dashboard/MainPage';

function App() {
  return (
    <>
    <Router>
    <Route path='/Dashboard' component={MainPage}/>
    <Fragment>
      {window.location.pathname !== '/Dashboard' && <Header />}
        <Route path='/' component={AccueilScreen} exact/>
        <Route path='/Actualités/:id' component={ArticleScreen}/>
      {window.location.pathname !== '/Dashboard' && <Footer />}
    </Fragment>
    </Router>
    </>
  );
}

export default App;
