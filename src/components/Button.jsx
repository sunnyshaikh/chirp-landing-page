import React from 'react'
import TwitterLogo from "../Assets/Twitter.svg"

const Button = ({ text }) => {
  return (
    <button className="btn btn-primary">
      <img src={TwitterLogo} alt="twitter" />
      <span>{text}</span>
    </button>
  )
}

export default Button