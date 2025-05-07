import React from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message }) => {
  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert-box">
        <p><strong>{message}</strong></p> {/* 메시지를 굵게 표시 */}
      </div>
    </div>
  );
};

export default CustomAlert;