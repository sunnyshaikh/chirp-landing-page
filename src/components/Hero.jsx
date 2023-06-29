import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import { users } from '../users'
import HeroBg from "../Assets/hero-bg-desktop.png"
import HeroBg2 from "../Assets/hero-bg-tablet.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Navbar />
        <div className="hero__main">
          <div className="hero__text_area">
            <h1 className="hero__title">
              Twitter analytics taken to a whole new  level.
            </h1>
            <p className="hero__desc">
              Chirp is a suite of Twitter analytics that will help you better understand your audience, which tweets they like, and most importantly, when they are the most active on Twitter.
            </p>
            <div className="hero__btns_area">
              <Button text="Sign in with Twitter" />
              <button className="btn">Learn more &gt;</button>
            </div>
            <div className="hero__avatars">
              {
                users.map(user => (
                  <img key={user.id} src={user.avatar} alt={user.desc} className="img__avatar" />
                ))
              }
            </div>
            <p className="join">
              Join <strong>195</strong> others who have analyzed their followers and scheduled <strong>1342</strong> tweets!
            </p>
          </div>
          <div className="hero__bg_area">
            <picture>
              <source media="(max-width: 768px)" srcSet={HeroBg2} />
              <img src={HeroBg} alt="hero image" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero