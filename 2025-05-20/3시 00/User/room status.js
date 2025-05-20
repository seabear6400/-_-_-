import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../User_css/room status.css";
import "../User_css/MeetingRoomJoin.css";
import logo from "../uplus_ci.png"; // 로고 이미지 불러오기

const MeetingRoomStatus = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0] // 현재 날짜를 기본값으로 설정
  );
  const [reservations, setReservations] = useState([
    { user: "김성우 사원", startTime: "09:00", endTime: "10:00", status: "회의실 예약" },
    { user: "김성우 사원", startTime: "10:00", endTime: "11:00", status: "대회의실 예약" },
    { user: "김성우 사원", startTime: "11:00", endTime: "12:00", status: "휴개실 예약" },
    { user: "김성우 사원", startTime: "12:00", endTime: "13:00", status: "대회의실 예약" },
    { user: "김성우 사원", startTime: "13:00", endTime: "14:00", status: "대회의실 예약" },
    { user: "김성우 사원", startTime: "14:00", endTime: "15:00", status: "회의실 예약" },
    { user: "김성우 사원", startTime: "15:00", endTime: "16:00", status: "대회의실 예약" },
    { user: "김성우 사원", startTime: "16:00", endTime: "17:00", status: "휴개실 예약" },
    { user: "김성우 사원", startTime: "17:00", endTime: "18:00", status: "회의실 예약" },
    { user: "김성우 사원", startTime: "18:00", endTime: "19:00", status: "휴개실 예약" },
    { user: "김성우 사원", startTime: "19:00", endTime: "20:00", status: "휴개실 예약" },
  ]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="meeting-room-status">
      <header className="status_header">
        <h1>회의실 예약 현황</h1>
      </header>
      <nav className="nav">
        <Link to="/MeetingRoomJoin" className="nav-button">사용자 회의실 등록</Link>
        <Link to="/MeetingRoomStatus" className="nav-button">사용자 회의실 현황</Link>
        <Link to="/A_MeetingRoomJoin" className="nav-button">회의실 등록</Link>
        <Link to="/A_MeetingRoomStatus" className="nav-button">회의실 현황/수정/삭제</Link>
        <Link to="/LoginPage" className="nav-button">로그인</Link>
      </nav>
      <img src={logo} alt="회사 로고" className="company-logo" /> {/* 로고 추가 */}
      <div className="U_calendar-container">
        <div className="U_calendar-header">
          날짜 선택:
          <input
            type="date"
            id="date"
            className="styled-date-input"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="U_calendar-header">
          예약현황:
          <select className="U_styled-select" id="status">
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
              <th>사용 시간</th> {/* 열 이름 변경 */}
              <th>예약 현황</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.user}</td>
                <td>{`${reservation.startTime} - ${reservation.endTime}`}</td> {/* 시간 합쳐서 표시 */}
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