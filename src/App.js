import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';

import Blog from './pages/Blog';
import DemoProduct from './pages/DemoProduct';

import ConsultationPage from './pages/Consultation';
import TermsCondition from './pages/TermsCondition'
import PrivacyPolicy from './pages/PrivacyPolicy';

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("FOSLX | Peshawar,Pakistan");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/TermsCondition" element={<TermsCondition />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
