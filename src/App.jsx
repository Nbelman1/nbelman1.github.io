import { useState } from 'react'
import './App.css'
import Header from './components/main-page/Header';
import Home from './components/main-page/Home';
import Footer from './components/main-page/Footer';
import Resume from './components/Resume';


function App() {

  return (
    <>
      <Header />
      <Home />
      <Footer />
      <Resume />
    </>
  );
};

export default App;
