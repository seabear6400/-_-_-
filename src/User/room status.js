import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../User_css/room status.css";

const MeetingRoomStatus = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0] // 현재 날짜를 기본값으로 설정
  );
  const [reservations, setReservations] = useState([
    { time: "9시", status: "대회의실 예약" },
    { time: "10시", status: "대회의실 예약" },
    { time: "11시", status: "대회의실 예약" },
    { time: "12시", status: "대회의실 예약" },
    { time: "13시", status: "대회의실 예약" },
    { time: "14시", status: "대회의실 예약" },
    { time: "15시", status: "대회의실 예약" },
    { time: "16시", status: "대회의실 예약" },
    { time: "17시", status: "대회의실 예약" },
    { time: "18시", status: "대회의실 예약" },
    { time: "19시", status: "대회의실 예약" },
    { time: "20시", status: "대회의실 예약" },
    { time: "21시", status: "대회의실 예약" },
  ]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="meeting-room-status">
      <header className="header">
        <h1>회의실 예약 현황</h1>
      </header>
      <nav className="nav">
        <Link to="/" className="nav-button">회의실 등록</Link>
        <Link to="/status" className="nav-button">회의실 예약 현황</Link>
      </nav>
      <div className="calendar-container">
        <label htmlFor="date">달력</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="reservation-table">
        <h2>{selectedDate} 예약 현황</h2>
        <table>
          <thead>
            <tr>
              <th>시간</th>
              <th>예약 현황</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.time}</td>
                <td>{reservation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingRoomStatus;