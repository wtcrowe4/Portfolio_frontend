import './App.css';

import { About, Footer, Header, Skills, Testimonials, Work } from './containers';
import { Navbar } from './components';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
