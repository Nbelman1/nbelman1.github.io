import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/main-page/Header';
import Home from './components/main-page/Home';
import Footer from './components/main-page/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
