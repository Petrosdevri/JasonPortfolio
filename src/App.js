import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';

function App() {
  return (
  <div className='App'>
    <Header />
    <Home />
    <About />
    <TechStack />
    <Projects />
    <ScrollButton />
    <Footer />
  </div>
  );
}

export default App;