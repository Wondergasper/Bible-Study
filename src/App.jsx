
import Logo from './Component/Logo/Logo'
import Home from './pages/Home'
import About from './pages/About/About'
import Footer from './Component/Footer/Footer'
import Stream from './pages/Stream/Stream'
import Discuss from './pages/Discuss/Discuss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'



const App = () => {
  return (
    <>
      <Router>
          <Logo />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Stream" element={<Stream />}/>
            <Route path='/Discuss' element={<Discuss />}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
