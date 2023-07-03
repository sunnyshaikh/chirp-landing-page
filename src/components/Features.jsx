import React from 'react'

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section__title features__title">
          Features that helps you<br /> Tweet smarter.
        </h2>
        <div className="features__card">
          <div className="feature__card">
            <div className="card__emoji">😃</div>
            <h3>Analytics</h3>
            <p>
              We constantly monitor your audience as it grows -- so you can Tweet when you followers are most likely to be online and ready to engage with your content.
            </p>
          </div>
          <div className="feature__card">
            <div className="card__emoji">😃</div>
            <h3>Smart Analyzer</h3>
            <p>
              Chirp automatically recognizes your followers most active items and automatically send you notifications if you're missing out on an opportunity.
            </p>
          </div>
          <div className="feature__card">
            <div className="card__emoji">😃</div>
            <h3>Scheduled your Tweets</h3>
            <p>
              Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read.
            </p>
          </div>
          <div className="feature__card">
            <div className="card__emoji">😃</div>
            <h3>Dark Mode</h3>
            <p>
              Friendly on the eyes, no matter what time you write your tweets. All colors are chosen to make sure your eyes are ease at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features