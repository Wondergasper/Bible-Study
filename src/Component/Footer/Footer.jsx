import './footer.css'
import logo from '../../assets/flame.png'

const Footer = () => {
return (

<footer className="footer">
  <div className="footer-content">
    <div className="footer-section logo-section">
      <img src={logo} alt="Flames" />
      <h4>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor
        volutpat.</h4>
    </div>

    <div className="footer-section">
      <h3>Company</h3>
      <ul>
        <li><a href="about.html">About us</a></li>
        <li><a href="contact-us.html">Contact us</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="user.html">User</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Explore</h3>
      <ul>
        <li><a href="ask-questions.html">Ask question</a></li>
        <li><a href="faq.html">FAQs</a></li>
        <li><a href="privacy-policy.html">Privacy policy</a></li>
        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Follow us</h3>
      <ul>
        <li><a href="https://www.facebook.com/">Facebook</a></li>
        <li><a href="https://www.instagram.com/">Instagram</a></li>
        <li><a href="https://www.linkedin.com/">Linkedin</a></li>
        <li><a href="https://www.twitter.com/">Twitter</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Call: +1 719-504-1984</p>
      <p>Email: pify@gmail.com</p>
      <p>Address: 7200 E Dry Creek Rd C104, Centennial, CO 80112, United States</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>©2024 Potters flame</p>
  </div>
</footer>

)
}

export default Footer