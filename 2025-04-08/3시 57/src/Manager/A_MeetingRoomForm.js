import React, { useState } from "react";
import "../Manager_css/A_MeetingRoomForm.css"; // 스타일 파일 추가

const A_MeetingRoomForm = ({ reservation, onClose, onSave }) => {
  const [time, setTime] = useState(reservation.time.replace("시", "")); // "시" 제거 후 초기화
  const [location, setLocation] = useState(reservation.status); // 장소를 status로 대체

  const handleTimeChange = (e) => {
    const value = e.target.value;
    // 숫자만 입력되도록 유효성 검사 및 21까지만 허용
    if (/^\d*$/.test(value) && (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 21))) {
      setTime(value);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // 체크박스 선택 값으로 장소 설정
  };

  const handleSave = () => {
    // 저장 시 "시"를 붙여서 저장
    onSave({ time: `${time}시`, status: location });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>수정</h2>
        <div className="form-group">
          <label htmlFor="time">시간:</label>
          <input
            id="time"
            type="text"
            value={time}
            onChange={handleTimeChange}
            placeholder="0~21 사이 숫자만 입력"
          />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>장소:</legend>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  name="location"
                  value="대회의실"
                  checked={location === "대회의실"}
                  onChange={handleLocationChange}
                />
                대회의실
              </label>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="회의실"
                  checked={location === "회의실"}
                  onChange={handleLocationChange}
                />
                회의실
              </label>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="휴게실"
                  checked={location === "휴게실"}
                  onChange={handleLocationChange}
                />
                휴게실
              </label>
            </div>
          </fieldset>
        </div>
        <div className="modal-actions">
          <button className="save-button" onClick={handleSave}>수정</button>
          <button className="cancel-button" onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default A_MeetingRoomForm;