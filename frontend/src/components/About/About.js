import React from 'react'

// style and Assets
import "./style.css"
import Badges from '../../assets/Badges.png'
import AboutImage from '../../assets/About.png';



const HomeHeader = () => {
  return (
    <div className='about'>
    <div className='about__leftContainer' span={12}>
    <div>
 
    <h1>
    Order food anytime, anywhere
    </h1>
    <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
    <img className='about__image img-fluid' src={Badges} alt="Badges" />
    </div>
    </div>
    <div className='about__rightContainer' span={12}>
    <img className='img-fluid' src={AboutImage} alt="about"/>
    </div>
    </div>

  )
}

export default HomeHeader