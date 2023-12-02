import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactOne from "../../components/Contact/ContactOne";
import Roadmap from "../../components/Roadmap/Roadmap";
import Sales from "../../components/Sales/Sales";
import TeamOne from "../../components/Team/TeamOne";
import TopPartners from "../../components/TopPartners/TopPartners";
import WhitePaper from "../../components/WhitePaper/WhitePaper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyElements from "../../components/WhyChooseUs/WhyElements";
import LayoutOne from "../../layouts/LayoutOne";
import { useState } from "react";
import Reproductor from "../../components/Sales/Reproductor";
import Initial from "../../components/Sales/Initial";
import Redes from "../../components/Sales/Redes";


const Home = () => {

  /* <div className="area-bg">
          <Roadmap />
          <WhitePaper />
        </div>

        <ContactOne />
  */


const [visible, setVisible] = useState(true);
const [duelos, setDuelos] = useState(false);
const [redes, setRedes] = useState(false);
const handleToggleSales = () => {
  
  setVisible(!visible);
};



  return (
    <LayoutOne  visible={visible} setVisible={setVisible} setDuelos={setDuelos} setRedes={setRedes}>
      <main className="fix">
     
      {visible && <Initial />}
      {visible && <TopPartners />}
      {visible && <Reproductor />}
      {visible && <Sales />}


      {duelos && <Banner />}
      {duelos && <TeamOne />}

      {redes && <Redes />}
      

       {/* 
        <TeamOne />
       
        <Banner />
        {duelos &&  <WhoWeAre />}
        <TopPartners />
        <WhyChooseUs />
       
       */}
       
       
      </main>
    </LayoutOne>
  );
};

export default Home;
