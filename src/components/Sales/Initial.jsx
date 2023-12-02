import React from "react";
import chartImg from "../../assets/img/images/grafico-final.png";
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
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 mr-3">
                <div className="row">
                    <button style={{  content: "none"}} type="button" class="btn btn-success btn-lg py-4">Comprar</button>
                </div>
                <div className="row">
                    <button type="button" class="btn btn-danger btn-lg py-4">Vender</button>
                </div>
            </div>
            <div className="col-lg-8 col-md-10 order-0 order-lg-2">
             
                <img src={chartImg} alt="" />
                
              
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initial;
