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
    <div className="modal modal-overlay">
      <div className="a_modal-content">
        <h2 className="modal-title">예약 수정</h2>
        <div className="form-group">
          <label htmlFor="user">사용자</label>
          <input
            id="user"
            type="text"
            className="form-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">들어가는 시간</label>
          <input
            id="startTime"
            type="time"
            className="form-input"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">나오는 시간</label>
          <input
            id="endTime"
            type="time"
            className="form-input"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>예약 상태</label>
          <select
            className="form-input"
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