
import Logo from './Component/Logo/Logo'
import Homee from './pages/Homee'
import About from './pages/About/About'
import Footer from './Component/Footer/Footer'
import Stream from './pages/Stream/Stream'
import Discuss from './pages/Discuss/Discuss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Router>
          <Logo />
          <Routes>
            <Route path="/" element={<Homee />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Stream" element={<Stream />}/>
            <Route path='/Discuss' element={<Discuss />}/>
          </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
