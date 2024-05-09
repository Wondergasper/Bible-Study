import './About.css'; // Make sure to import the CSS file

const About = () => {
  return (
    <div className="church-info">
      <h1>We exist to urgently lead people to say YES to Jesus and his purposes for their lives.</h1>
      <div className="content">
        <div className="text">
          <p>Saddleback Church started with two young church planters, a dream, and a map. God gave Pastor Rick and Kay Warren the dream to plant a church for people who did not like church, and he led them to Southern California.</p>
          <p>Our first service was held on April 6, 1980. Over the next 43 years, we witnessed God perform miracle after miracle as we moved locations, raised money for permanent buildings, launched campuses in California and around the world, and baptized over 50,000 people.</p>
          <p>In September 2022, we welcomed Pastor Andy Wood as our new lead pastor.</p>
          <p>As we step into the future, we are believing God will do more than we could ever ask for or imagine. Our best days are ahead, and we cannot wait to see all the ways God will change lives in years to come!</p>
        </div>
        <div className="image">
          <img src="your-image-path.jpg" alt="Church members celebrating" />
        </div>
      </div>
      <div className="cta">
        <button aria-label="Plan your visit to our church">Plan A Visit</button>
      </div>
    </div>
  );
}
  
export default About;