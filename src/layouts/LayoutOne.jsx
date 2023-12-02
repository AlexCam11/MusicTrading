import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";


const LayoutOne = ({ visible, setVisible, children }) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne visible={visible} setVisible={setVisible} />

      {children}

      <FooterOne />
    </div>
  );
};
export default LayoutOne;
