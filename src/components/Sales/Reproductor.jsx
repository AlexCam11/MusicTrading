import React from "react";
import chartImg from "../../assets/img/images/grafico-final.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import repr from "../../assets/img/reproductor/Recurso 29.png";
const Reproductor = () => {
  const chart_info_list = [
    "Contingency: 70%",
    "Business Development: 10%",
    "Investor: 30%",
    "Poland",
    "Legal & Regulation:10%",
    "Czech Republic",
  ];

  return (
    <section id="reproductor" className="chart-area chart-bg ">
      <div className="container">
        <div className="row">
            <div className="col-md-12">

            <img src={repr} className="img-tumblr"  />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Reproductor;
