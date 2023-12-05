import React from "react";
import chartImg from "../../assets/img/images/grafico-final.png";
import plataforma from "../../assets/img/git/plataformas personalizada.gif";


import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Initial = () => {
  const chart_info_list = [
    "Contingency: 70%",
    "Business Development: 10%",
    "Investor: 30%",
    "Poland",
    "Legal & Regulation:10%",
    "Czech Republic",
  ];

  return (
    <section id="sales" className="chart-area chart-bg3 ">
      <div className="container-fluid">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 order-0 order-lg-2">
                <img src={plataforma} alt="" />
            </div>

          </div>
          <div className="row justify-content-center mt-5 ">
          <div className="col-lg-4 mr-3">
                <div className="row">
                  <div className="col-md-6">
                  <button style={{  content: "none"}} type="button" class="btn btn-success btn-lg py-4">Comprar</button>
                  </div>
                  <div className="col-md-6">
                  <button type="button" class="btn btn-danger btn-lg py-4">Vender</button>
                  </div>

                </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initial;
