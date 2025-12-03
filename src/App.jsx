import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
//import IntroSection from './components/maincontents/IntroSEction';
import ServicesSection from './components/maincontents/services';
import ProjectsSection from './components/maincontents/projects';
import { siteContent } from './data/siteContent';
import './App.css'; // Make sure your CSS is imported
import Home from './components/maincontents/Home';
import GallerySection from './components/maincontents/gallery';
import TeamSection from './components/maincontents/TeamSection';
import ContactSection from './components/maincontents/contactForm';



function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        {/* Spacer to avoid content hidden under fixed header */}
        {/* <div style={{ height: '70px' }}></div> */}

        <main className="app-main">
          <Routes>
            {/* Home Page with all sections */}
            <Route path="/" element={<Home />} />

            {/* Individual Section Routes */}
            <Route path="/services" element={<ServicesSection />} />
            <Route path='/projects' element={<ProjectsSection />} />
            <Route path='/gallery' element={<GallerySection />} />
            <Route path= '/team' element={<TeamSection/>}/>
            <Route path= '/contact' element={<ContactSection/>}/>
          </Routes>


        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
