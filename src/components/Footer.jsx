import React from 'react'
import TwitterBlack from "../Assets/TwitterBlack.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <a href="./" role="image" className="logo">Chirp.</a>
          <ul className="footer__menu">
            <li>
              <a href="./" role="image">
                <img src={TwitterBlack} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer