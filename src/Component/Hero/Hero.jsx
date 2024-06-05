import './Hero.css'

const Hero = () => {
return (
<div className='home'>
  <div className="home-text">
    <h1>Welcome</h1>
    <p>Welcome to your journey of faith and reflection! Explore, learn, and grow with us as we delve into the Word
      together</p>
  </div>
  <div className='search-bar'>
    <input type="text" placeholder='Search here..' />
    <input type="date" />
    <button>Search</button>
  </div>
</div>
)
}
export default Hero