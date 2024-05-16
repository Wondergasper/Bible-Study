import './Section.css'
import { NavLink } from 'react-router-dom'
import playIcon from '../../assets/play-icon.png';
import House from '../../assets/House-logo.jpg'
import QnA from '../../assets/QandA.png'

const Section = () => {
    return (
        <div className='container'>
            <div className="section">
                <NavLink to="/About" className="NavLink">
                    <div className='about-us'>
                        <h3>Home</h3>
                        <img src={House} alt="" />
                        <h2>About Us</h2>
                        <p>Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. Aperiam, culpa.</p>
                    </div>
                </NavLink>
                <NavLink to="/Stream" className="NavLink">
                    <div className="video-library">
                        <h3>Video</h3>
                        <img src={playIcon} alt="" />
                        <h2>Listen Now</h2>
                        <p>Join our service</p>
                    </div>
                </NavLink>
                <NavLink to="/Discuss" className="NavLink">
                    <div className="forum">
                        <h3>Discussion</h3>
                       <img src={QnA} alt="" />
                        <h2>Question & Answer</h2>
                        <p></p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Section
