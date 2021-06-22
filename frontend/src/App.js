import './App.css';
import { Container } from 'react-bootstrap'
import Header from './Components/LandingPage/Header'
import Footer from './Components/LandingPage/Footer'
import Banner from './Components/LandingPage/Banner'
import Contenu from './Components/LandingPage/Contenu';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Container>
          <Contenu />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
