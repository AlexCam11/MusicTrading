import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logoImage from "../../../src/assets/img/logo/logoMus.png";
import fondo from "../../../src/assets/img/bg/bg-Music-tex.png";
import { GiBoxingGlove } from "react-icons/gi";

import { FaNewspaper } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";

const Lateral = ({ visible, setVisible,setDuelos,setRedes }) => {
   
    const [toggled, setToggled] = React.useState(false);
    const toggleVisibility = () => {
        setVisible(!visible);
      };

      const inicio=()=>{
        setVisible(true);
        setDuelos(false);
        setRedes(false);
      }
      const duelos=()=>{
        setVisible(false);
        setDuelos(true);
        setRedes(false);
      }
      const redes=()=>{
        setVisible(false);
        setDuelos(false);
        setRedes(true);
      }
    return (
      <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
        <Sidebar backgroundColor="#00002C" onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" >
          <Menu>
            <MenuItem>  <img src={logoImage} alt="BigTech Logo"  />  </MenuItem>
            <MenuItem onClick={()=>inicio()}><FaHome /> HOME</MenuItem>
            <MenuItem onClick={()=>duelos()}><GiBoxingGlove /> DUELOS</MenuItem>
            <MenuItem onClick={()=>redes()}><FaNewspaper /> REDES</MenuItem>
       
            
          </Menu>
        </Sidebar>
        <main style={{ display: 'flex', padding: 10 }}>
          <div>
              
                <img src={logoImage} alt="BigTech Logo"  onClick={() => setToggled(!toggled)}/>
               
            
          </div>
        </main>
      </div>
  );
};

export default Lateral;
