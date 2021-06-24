import './App.css';
import './fonts/font.css';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './Components/LandingPage/Header'
import Footer from './Components/LandingPage/Footer'
import AccueilScreen from './Screens/LandingPage/AccueilScreen';
import ArticleScreen from './Screens/LandingPage/ArticleScreen';

function App() {
  return (
    <>
    <Router>
      <Header />
      
      <main>
        <Route path='/' component={AccueilScreen} exact/>
        <Route path='/Actualités/:id' component={ArticleScreen}/>

      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
