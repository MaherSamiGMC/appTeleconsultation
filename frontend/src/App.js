import './App.css';
import { Container } from 'react-bootstrap'
import Header from './Components/LandingPage/Header'
import Footer from './Components/LandingPage/Footer'
function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className='text-center' >Welcome to Near Doctor</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
