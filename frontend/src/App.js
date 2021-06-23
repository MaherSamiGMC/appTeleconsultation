import './App.css';

import Header from './Components/LandingPage/Header'
import Footer from './Components/LandingPage/Footer'
import Banner from './Components/LandingPage/Banner'
import Contenu from './Components/LandingPage/Contenu';
import ArticleScreen from './Screens/LandingPage/ArticleScreen';
import StaticScreen from './Screens/LandingPage/StaticScreen';
function App() {
  return (
    <>
      <Header />
      <Banner />
      <main className='pt-5'>

        <Contenu />
        <section className="articles text-center">
          <ArticleScreen />
        </section>
        <section className="static text-center">
          <StaticScreen />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
