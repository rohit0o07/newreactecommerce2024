import React, { useState } from "react";
import Ratting from "../components/Ratting";
const reviewtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
    const [reviewShow,setReviewShow] = useState(true);
  return (
    <div>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>

      {/*desc and review Content*/}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/*add review field*/}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewtitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*description*/}
        <div className="description">
          <p>
            product description is a piece of marketing copywriting that tells
            people what a product is and why it’s worth buying. Beyond a list of
            product details or features, descriptions tell a story about what
            makes a product special and persuade customers to make a purchase.
            Product descriptions can vary in length, style,
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Ill break down why your product descriptions are an incredible
                  opportunity to engage your potential customers
                </li>
                <li>
                  Ill share five examples of insanely effective product
                  descriptions
                </li>
                <li>
                  And Ill explain how you can use these product description
                  strategies for your own ecommerce business.
                </li>
                <li>
                  The perfect size to grill up a couple of burgers for everyone
                  in the family
                </li>
                <li>Packed with branded features</li>
                <li>Welcome to the Weber family</li>
              </ul>
            </div>
          </div>
          <p>
          product description is a piece of marketing copywriting that tells
          people what a product is and why it’s worth buying. Beyond a list of
          product details or features, descriptions tell a story about what
          makes a product special and persuade customers to make a purchase.
          Product descriptions can vary in length, style,
        </p>
        </div>

        
      </div>
    </div>
  );
};

export default Review;
