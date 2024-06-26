//import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Logo from './Component/Logo/Logo';
import Home from './pages/Home';
import About from './pages/About/About';
import Footer from './Component/Footer/Footer';
import Stream from './pages/Stream/Stream';
import Discuss from './pages/Discuss/Discuss';
//import Preloader from './Component/preloader/preloader'; // Make sure the path is correct
import './App.css';

const App = () => {
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false); 
  //   }, 2000);
  // }, []);

  return (
    <Router>
      {/* {isLoading && <Preloader />} */}
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/discuss" element={<Discuss />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
