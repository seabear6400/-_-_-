import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../User_css/room status.css";
import logo from "../uplus_ci.png"; // 로고 이미지 불러오기

const MeetingRoomStatus = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0] // 현재 날짜를 기본값으로 설정
  );
  const [reservations, setReservations] = useState([
    { user: "김성우 사원", time: "9시", status: "회의실 예약" },
    { user: "김성우 사원", time: "10시", status: "대회의실 예약" },
    { user: "김성우 사원", time: "11시", status: "휴개실 예약" },
    { user: "김성우 사원", time: "12시", status: "대회의실 예약" },
    { user: "김성우 사원", time: "13시", status: "대회의실 예약" },
    { user: "김성우 사원", time: "14시", status: "회의실 예약" },
    { user: "김성우 사원", time: "15시", status: "대회의실 예약" },
    { user: "김성우 사원", time: "16시", status: "휴개실 예약" },
    { user: "김성우 사원", time: "17시", status: "회의실 예약" },
    { user: "김성우 사원", time: "18시", status: "휴개실 예약" },
    { user: "김성우 사원", time: "19시", status: "휴개실 예약" },
    { user: "김성우 사원", time: "20시", status: "회의실 예약" },
    { user: "김성우 사원", time: "21시", status: "대회의실 예약" },
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
        <Link to="/login" className="nav-button">로그인</Link>
        <img src={logo} alt="회사 로고" className="company-logo" /> {/* 로고 추가 */}
      </nav>
      <div className="calendar-container">
        <div className="calendar-header">
          날짜 선택:
          <input
            type="date"
            id="date"
            className="styled-date-input"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="calendar-header">
          예약현황:
          <select className="styled-select" id="status">
            <option value="all">전체</option>
            <option value="reserved">대회의실</option>
            <option value="available">휴개실</option>  
            <option value="not-available">회의실</option>
          </select>

        </div>
      </div>
      <div className="reservation-table">
        <h2>{selectedDate} 예약 현황</h2>
        <table>
          <thead>
            <tr>
              <th>사용자</th>
              <th>사용시간</th>
              <th>예약 현황</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.user}</td>
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