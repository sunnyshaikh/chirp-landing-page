import React from 'react'
import userAvatar1 from "../Assets/userAvatar01.svg"
import userAvatar2 from "../Assets/userAvatar02.svg"
import userAvatar3 from "../Assets/userAvatar03.svg"
import TwitterBlue from "../Assets/TwitterBlue.svg"
import LikeIcon from "../Assets/Like.svg"

const customers = [
  {
    id: 1,
    avatar: userAvatar1,
    name: "Sara May",
    tag: "@sara_may",
    comment: "I just tried out @chirp and it's amazing, love all the analytics I can see.",
    likes: 2,
    date: "March 2, 2021"
  },
  {
    id: 2,
    avatar: userAvatar2,
    name: "Jack Scott",
    tag: "@jackscott_",
    comment: "I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
    likes: 32,
    date: "March 2, 2021"
  },
  {
    id: 3,
    avatar: userAvatar3,
    name: "Jessica May",
    tag: "@jmay98",
    comment: "Absolutely love everything about Chirp, from the design to how everything works smoothly.",
    likes: 221,
    date: "March 2, 2021"
  }
]

const Customers = () => {
  return (
    <section className="customers">
      <div className="container">
        <h2 className="section__title cutomers__title">
          What our Customers say
        </h2>
        <div className="customers__card">
          {
            customers.map(customer => (
              <div key={customer.id} className="customer__card">
                <div className="customer__profile">
                  <div className="avatar">
                    <img src={customer.avatar} alt="avatar" />
                  </div>
                  <div className="customer__name">
                    <h3>{customer.name}</h3>
                    <p>{customer.tag}</p>
                  </div>
                  <a href="./" aria-label="twitter-logo">
                    <img src={TwitterBlue} alt="twitter" />
                  </a>
                </div>
                <p className="customer__comment">{customer.comment}</p>
                <div className="customer__card__footer">
                  <div className="like">
                    <img src={LikeIcon} alt="like" />
                    <span className="no-of-like">{customer.likes}</span>
                  </div>
                  <p className="comment__date">{customer.date}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Customers