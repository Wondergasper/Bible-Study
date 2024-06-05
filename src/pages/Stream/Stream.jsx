import './Stream.css';
import play_icon from '../../assets/play-icon.png'

function Stream() {
return (
<div className="container">
  <div className="main-content">
    <div className="video-presentation">
      <div className="video-info">
        <p>Latest Message</p>
        <h2>Church Together Weekend</h2>
        <p className="video-date">Matt Heer | May 05, 2024</p> 
       
          <button className="watch-now-btn">
            <img src={play_icon} alt="Play" className='play-icon' />
            Watch Now
          </button>

      </div>
    </div>
  </div>

  <aside className="side-bar">
    <h3>Recent Messages</h3>
    <ul className="message-list">
      <li className="message"> <span>Peace in My Relationships</span> <span>Andy Wood | April 28, 2024</span> </li>
      <li className="message"> <span>Facing My Fear</span> <span>Andy Wood | April 21, 2024</span> </li>
      <li className="message"> <span>Embracing Uncertainty</span> <span>Stacie Wood | April 14, 2024</span> </li>
      <li className="message"> <span>Embracing Uncertainty</span> <span>Stacie Wood | April 14, 2024</span> </li>
    </ul>
  </aside>
</div>
);
}

export default Stream;