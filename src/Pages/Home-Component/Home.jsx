import React from 'react'
import './Home.css'
import Nav from '../../Components/Nav-Component/Nav'
import hero_banner from '../../assets/assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import Title from '../../Components/Title-Card-Component/Title'
import Footer from '../../Components/Footer-Component/Footer'
import { Form } from 'react-router-dom'





const Home = () => {
  return (
    <div className='home-container'>
      <Nav />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="movie-title">
          <img src={hero_title} alt="" className='title-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy. </p>
          <div className="hero-btn">
            <button className='play-btn'><img src={play_icon} alt="" />Play</button>
            <button className='info-btn'><img src={info_icon} alt="" />More Info</button>
          </div>

          <Title />

        </div>

      </div>
      <div className="more-cards">
        <Title title={"Blockbuster Movies"} />
        <Title title={"Only on Netflix"} />
        <Title title={"Upcoming"} />
        <Title title={"Top Pics for You"} />
      </div>
      <Footer />

    </div>
  )
}

export default Home