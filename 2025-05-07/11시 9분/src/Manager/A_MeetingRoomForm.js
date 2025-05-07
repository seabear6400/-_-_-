import React, { useState } from "react";
import "../Manager_css/A_MeetingRoomForm.css"; // 스타일 파일 추가

const A_MeetingRoomForm = ({ reservation, onClose, onSave }) => {
  const [user, setUser] = useState(reservation?.user || "");
  const [date, setDate] = useState(reservation?.date || "");
  const [time, setTime] = useState(reservation?.time || "");
  const [status, setStatus] = useState(reservation?.status || "");

  const handleSave = () => {
    onSave({ user, date, time, status });
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
          <label htmlFor="date">날짜:</label>
          <input
            id="date"
            type="date" // 날짜만 입력받도록 수정
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">시간:</label>
          <input
            id="time"
            type="time" // 시간만 입력받도록 수정
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>예약 상태:</label>
          <div className="status-options centered"> {/* 가운데 정렬 클래스 추가 */}
            <label className="status-option">
              <input
                type="radio"
                name="status"
                value="회의실 예약"
                checked={status === "회의실 예약"}
                onChange={() => setStatus("회의실 예약")}
              />
              회의실 예약
            </label>
            <label className="status-option">
              <input
                type="radio"
                name="status"
                value="대회의실 예약"
                checked={status === "대회의실 예약"}
                onChange={() => setStatus("대회의실 예약")}
              />
              대회의실 예약
            </label>
            <label className="status-option">
              <input
                type="radio"
                name="status"
                value="휴개실 예약"
                checked={status === "휴개실 예약"}
                onChange={() => setStatus("휴개실 예약")}
              />
              휴개실 예약
            </label>
          </div>
        </div>
        <div className="modal-actions">
          <button className="F_save-button" onClick={handleSave}>저장</button>
          <button className="F_cancel-button" onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default A_MeetingRoomForm;