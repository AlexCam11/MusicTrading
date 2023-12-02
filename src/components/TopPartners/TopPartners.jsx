import React from "react";
import img01 from "../../assets/img/partner/logo-universal.png";
import img02 from "../../assets/img/partner/logo-sony.png";
import img03 from "../../assets/img/partner/1.png";


const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "" },
    { src: img02, title: "" },
    {src:img03,title:""}
    
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Our top partner</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartners;
