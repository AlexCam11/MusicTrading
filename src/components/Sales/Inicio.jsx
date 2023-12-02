import React from "react";
import chartImg from "../../assets/img/images/grafico-final.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import repr from "../../assets/img/logo/logoMus.png";
import imag1 from "../../assets/img/logo/login free.png";
import imag2 from "../../assets/img/logo/login vip.png";

const Inicio = () => {
  const chart_info_list = [
    "Contingency: 70%",
    "Business Development: 10%",
    "Investor: 30%",
    "Poland",
    "Legal & Regulation:10%",
    "Czech Republic",
  ];

  return (
    <section id="reproductor" className="chart-area chart-bg2 ">
      <div className="container">
        <div className="row  justify-content-center">
            <div className="col-md-8">
            <img src={repr}  />
            </div>
       
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3" >
         <a href="https://musiclogin.nexas.cloud/auth/login?next=/"><img src ={imag1} className="mt-2"/></a>
          </div>
          <div className="col-md-3">
          <a href="https://musiclogin.nexas.cloud/auth/login?next=/"><img src ={imag2}/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
