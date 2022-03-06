import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='scroll-wrapper'>
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
