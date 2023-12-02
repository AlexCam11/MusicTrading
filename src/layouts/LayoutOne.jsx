import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";


const LayoutOne = ({ visible, setVisible, children,setDuelos,setRedes }) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne visible={visible} setVisible={setVisible} setDuelos={setDuelos}  setRedes={setRedes} />

      {children}

      <FooterOne />
    </div>
  );
};
export default LayoutOne;
