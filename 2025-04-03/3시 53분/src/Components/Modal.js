import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          닫기
        </button>
        {children}
      </div>
    </div>
  );
}