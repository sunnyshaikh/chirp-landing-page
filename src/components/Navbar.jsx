import React, { useState } from 'react'
import Button from './Button'
import Ham from "../Assets/HamburgerMenu.svg"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="navbar">
      <a href="./" role="img" className="navbar__logo logo">Chirp.</a>
      <ul className={`${toggle ? "navbar__menu active" : "navbar__menu"}`}>
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
      <button className="navbar__toggle_menu" onClick={() => setToggle(!toggle)}>
        <img src={Ham} alt="toggle" />
      </button>
    </nav>
  )
}

export default Navbar