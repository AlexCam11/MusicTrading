import React from "react";
import chartImg from "../../assets/img/images/grafico-final.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import { Link } from "react-router-dom";

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
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                <Link  className="btn" style={{background:"#FF0000", alignContent: "center"}} >
                  BUY
                </Link>
                <Link className="btn" style={{background:"#008000",alignContent: "center"}}>
                  SELL
                </Link>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Song"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="Investments"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="Mi gente"
                    description="Song by artist J balvin with 10 M views"
                    link="/"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="Investment community"
                    description="39 Million return on investments in royalties"
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
