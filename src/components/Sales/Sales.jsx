import React from "react";

import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import { Link } from "react-router-dom";
import chartImg from "../../assets/img/reproductor/grafica para artistas-1.gif";
const Sales = () => {
  const chart_info_list = [
    "Unit: 1/100000 ",
    "Market Sale: $500",
    
  ];

  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">

            
            <div className="col-lg-12 col-md-12 order-0 order-lg-2">
            <div className="row ">
                <div className="col-md-5 chart-wrap wow fadeInRight">
                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="Mi gente"
                    description="Song by artist J balvin with 10 M views"
                    link="/"
                  />
<br/>
                  J Balvin, es un cantante y productor colombiano, reconocido como uno de los artistas latinos más vendidos del mundo, con ventas de treinta y cinco millones de álbumes y sencillos a nivel mundial.
                 
                </div>
                </div>
                <div className="col-md-7 text-center">
                <div className="chart-wrap wow fadeInRight text-dark" data-wow-delay=".2s">
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                
                 
                </ul>
              </div>
              <div className="row justify-content-center">
                      <div className="col-md-3 pt-5 text-center">
                        <button className="btn btn-verde pr-5">Comprar</button>
                      </div>
                        <div className="col-md-3 pt-5 text-center">
                        <button className="btn btn-rojo">Vender</button>
                      </div>

                  </div>
                </div>
              </div>
            
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
              
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
