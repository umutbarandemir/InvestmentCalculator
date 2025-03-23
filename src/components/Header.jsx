import React from 'react'
import HeaderImage from "../assets/investment-calculator-logo.png"

const Header = () => {
  return (
    <header id='header'>
        <img src={HeaderImage} alt="No image" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header