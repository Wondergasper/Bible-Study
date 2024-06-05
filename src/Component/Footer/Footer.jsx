import './footer.css'
import logo from '../../assets/flame.png'
// Import icons
import { FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
return (
<footer className="footer">
  <div className='footer-top'>
    <figure>
      <img src={logo} className='footer-logo' alt="Flames" />
    </figure>

    <div className="social-links">
      <h3>Follow us</h3>
      <ul>
        <li><a href="https://www.facebook.com/"><FaFacebook className='facebook' /></a></li>
        <li><a href="https://www.instagram.com/rccgpottersflame/"><FaInstagram className='instagram'/></a></li>
        <li><a href="https://youtube.com/@rccgpottersflameteenschurch46?si=ncgrGkiSOMgEz4Z_"><FaYoutube className='linkedin'/></a></li>
        <li><a href="https://www.twitter.com/"><FaTwitter className='twitter'/></a></li>
      </ul>
    </div>
  </div>

  <div className="footer-content">
    <div className="footer-info footer-section">
      <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor
        volutpat.</p>
    </div>
    <div className="footer-section">
      <h3>Company</h3>
      <ul className='footer-links'>
        <li><a href="about.html">About us</a></li>
        <li><a href="contact-us.html">Contact us</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="user.html">User</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Explore</h3>
      <ul className='footer-links'>
        <li><a href="ask-questions.html">Ask question</a></li>
        <li><a href="faq.html">FAQs</a></li>
        <li><a href="privacy-policy.html">Privacy policy</a></li>
        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact Us</h3>
      <ul className='footer-links'>
        <li>Call:+234</li>
        <li>Email: pify@gmail.com</li>
        <li>Address: 7200 E Dry Creek Rd C104, Centennial, CO 80112, United States</li>
      </ul>
    </div>
  </div>

  <div className="copyright">
    <p>©2024 Potters flame</p>
  </div>
</footer>

)
}

export default Footer