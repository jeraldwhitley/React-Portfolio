import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

export default function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className= "page-container">
      <Header current={currentSection} onNavClick={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}



