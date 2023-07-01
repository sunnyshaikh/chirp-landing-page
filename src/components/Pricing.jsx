import React from 'react'
import CheckmarkIcon from "../Assets/Checkmark.svg"
import Button from './Button'

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2 className="section__title pricing__title">
          One simple price plan.
        </h2>
        <p>
          Start growing your Twitter aacount by analyzing your follower's pattern's
        </p>
        <div className="pricing__cards">
          <div className="pricing__card">
            <p className="duration">Monthly</p>
            <h2>$9<small>/mo</small></h2>
            <hr />
            <ul className="pricing__features">
              <li>
                <img src={CheckmarkIcon} alt="checkmark" />
                <span>Unlimited* Scheduled tweets and threads.</span>
              </li>
              <li>
                <img src={CheckmarkIcon} alt="checkmark" />
                <span>Schedule upto 3 weeks in advance.</span>
              </li>
              <li>
                <img src={CheckmarkIcon} alt="checkmark" />
                <span>Real time audience analytics tracking upto 5k followers.</span>
              </li>
            </ul>
            <hr />
            <Button text="Start Trial with Twitter" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing