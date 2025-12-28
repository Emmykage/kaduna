import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import DirectorPage from './pages/DirectorPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { Toaster } from './components/UI/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Kaduna Factory - Precision Manufacturing</title>
        <meta name="description" content="Kaduna Factory: Nigeria's premier destination for sustainable industrial manufacturing and engineering excellence." />
      </Helmet>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-green-500 selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/directors" element={<DirectorPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;