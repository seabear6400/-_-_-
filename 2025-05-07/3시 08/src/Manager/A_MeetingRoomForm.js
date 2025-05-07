import React, { useState } from "react";
import "../Manager_css/A_MeetingRoomForm.css"; // 스타일 파일 추가

const A_MeetingRoomForm = ({ reservation, onClose, onSave, buttonLabel }) => {
  const [user, setUser] = useState(reservation?.user || "");
  const [startTime, setStartTime] = useState(reservation?.startTime || "");
  const [endTime, setEndTime] = useState(reservation?.endTime || "");
  const [status, setStatus] = useState(reservation?.status || "");

  const handleSave = () => {
    const updatedReservation = { ...reservation, user, startTime, endTime, status };
    onSave(updatedReservation);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>예약 수정</h2>
        <div className="form-group">
          <label htmlFor="user">사용자:</label>
          <input
            id="user"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">시작 시간:</label>
          <input
            id="startTime"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">종료 시간:</label>
          <input
            id="endTime"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>예약 상태:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="회의실 예약">회의실 예약</option>
            <option value="대회의실 예약">대회의실 예약</option>
            <option value="휴개실 예약">휴개실 예약</option>
          </select>
        </div>
        <div className="modal-actions">
          <button className="F_save-button" onClick={handleSave}>{buttonLabel}</button>
          <button className="F_cancel-button" onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default A_MeetingRoomForm;