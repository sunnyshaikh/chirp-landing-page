import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="./" role="img" className="navbar__logo logo">Chirp.</a>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#" className="navbar__list">Home</a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__list">Pricing</a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__list">FAQ</a>
        </li>
        <Button text="Sign in with Twitter" />
      </ul>
    </nav>
  )
}

export default Navbar