import React from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message }) => {
  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert-box">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert;