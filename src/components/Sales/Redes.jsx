import React from "react";
import chartImg from "../../assets/img/images/grafico-final.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import repr from "../../assets/img/images/news paper.png";

const Redes = () => {
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
        <div className="row  justify-content-center">
            <div className="col-md-8">

            <img src={repr}  />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Redes;
