import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assests/hero_banner.jpg'
import hero_title from '../../assests/hero_title.png'
import play_button from '../../assests/play_icon.png'
import info_icon from '../../assests/info_icon.png'
import Titlecard from '../../components/Navbar/Titlecards/Titlecard'
import Footer from '../../components/Navbar/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>A group of young friends witnesses 
            supernatural forces and secret government exploits.</p>
            <div className="hero-button">
              <button className='btn'><img src={play_button} alt="" />Play</button>
               <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <Titlecard/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecard title={"Blockbuster Movies"} category={"top_rated"}/>
        <Titlecard title={"Only on Netflix"} category={"popular"}/>
        <Titlecard title={"Upcomming"} category={"upcoming"}/>
        <Titlecard title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
