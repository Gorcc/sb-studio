import './App.css'
import Hero from "../components/hero/hero";
import Portfolio from "../components/portfolio/portfolio";
import Contact from "../components/contact/contact";
import Services from "../components/services/services";
import Footer from '../components/footer/Footer';

function App() {

  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
