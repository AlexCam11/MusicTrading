import React from "react";
import img01 from "../../assets/img/images/trading-Music.png";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" />
              {/*<img src={img02} alt="" className="img-two" />*/}
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  The World’s <span>1st Music Trading</span> Platform That Offers Rewards
                </h2>
              </div>
              <p>
                The World’s 1st Music Trading Platform That Offers Rewards and The platform helps investors in the music industry
              </p>
              <Link to="/" className="btn">
                trading begins
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
