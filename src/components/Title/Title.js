import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
    <div className="title my-3 p-2 fs-4 fw-bold fantasy bg-light rounded d-flex align-items-center justify-content-center">
      
      {props.children}
    </div>
    </div>
  );
};

export default Title;