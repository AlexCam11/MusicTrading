import React from "react";
import img01 from "../../assets/img/partner/logo-universal.png";
import img02 from "../../assets/img/partner/logo-sony.png";
import img03 from "../../assets/img/partner/1.png";
import Reproductor from "../Sales/Reproductor";
import { useState } from "react";
const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "" },
    { src: img02, title: "" },
    {src:img03,title:""}
    
  ];
  const [musica,setmusica]=useState(false);
  return (
    <>
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Nuestras Disqueras</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index} onClick={()=>setmusica(true)}>
                    <img src={item.src} alt={item.title} width={200}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   {
    musica && <Reproductor />
   } 
    </>
  );
};

export default TopPartners;
