import React from "react";
import img01 from "../../assets/img/team/j-balvin2.png";
import img02 from "../../assets/img/team/maluma2.png";
import img03 from "../../assets/img/team/team_img03.png";
import img04 from "../../assets/img/team/team_img04.png";
import img05 from "../../assets/img/team/team_img05.png";
import img06 from "../../assets/img/team/team_img06.png";
import img07 from "../../assets/img/team/team_img07.png";
import img08 from "../../assets/img/team/team_img08.png";
import duelo from "../../assets/img/reproductor/PIAversus.png";
import chartImg from "../../assets/img/reproductor/grafica para artistas-1.gif";
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: img01,
      name: "J Balvin",
      designation: "Defiant",
    },
    {
      src: img02,
      name: "Maluma",
      designation: "Adversary",
    }


  ];
  const chart_info_list = [
    "Unit: 1/100000 ",
    "Market Sale: $500",
    
  ];
  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Versus</span>
              <h2 className="title">
                Musical<br /> <span>Duels</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
         
            <div  className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={team_members[0]} />
            </div>
            <div  className="col-xl-3 col-md-4 col-sm-6">
            <div className="team-item">
              <div className="">
                <img  src={duelo} width={160}/>
              </div>
            </div>
            </div>
            <div  className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={team_members[1]} />
            </div>
         
        </div>
        
        <div className="row justify-content-between">
         
            <div  className="col-xl-6 col-md-5 col-sm-6">
            <div className="chart-wrap wow fadeInRight text-dark" data-wow-delay=".2s">
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                
                 
                </ul>
                <div className="row justify-content-center">
                      <div className="col-md-3 pt-5 text-center">
                        <button className="btn btn-verde pr-5">Apostar</button>
                     </div>

                  </div>
              </div>
              
            </div>
           
            <div  className="col-xl-6 col-md-5 col-sm-6">
            <div className="chart-wrap wow fadeInRight text-dark" data-wow-delay=".2s">
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                
                 
                </ul>
                <div className="row justify-content-center">
                      <div className="col-md-3 pt-5 text-center">
                        <button className="btn btn-verde pr-5">Apostar</button>
                     </div>

                  </div>
              </div>
            </div>
         
        </div>
       
      </div>
    </section>
  );
};

export default TeamOne;
