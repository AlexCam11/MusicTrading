import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import art from "../../assets/img/team/balvin1.png";

const SalesTabContent = (props) => {
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <p className="">{props.description}</p>
        <img src={art} alt="" ></img>
      </div>
    </div>
  );
};

export default SalesTabContent;
