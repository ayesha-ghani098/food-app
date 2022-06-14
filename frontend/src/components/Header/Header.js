import React from 'react'
import { Link } from "react-router-dom";

// style and Assets
import "./style.css"
import Logo from '../../assets/logo.png'

// Styled Components


const HomeHeader = () => {
  return (
 <div className='header'>
 <div className='header__logoContainer'>
 <img className='header__logo' src={Logo} alt="Logo"/>
 Lilies
 </div>
 <div className='header__linkContainer'>
 <Link to="/"className='link__Item'>Home</Link>
 <Link to="login" className='link__Item'>login</Link>
 <Link to="signup" className='link__Item'>Sign up</Link>
 </div>
 </div>
  )
}

export default HomeHeader