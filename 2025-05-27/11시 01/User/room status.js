import React, { useState, useEffect } from "react";
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
  const [selectedStatus, setSelectedStatus] = useState("all"); // 추가

  useEffect(() => {
    // 페이지가 로드될 때 reservation-row에 show 클래스를 순차적으로 추가
    const rows = document.querySelectorAll('.reservation-row');
    rows.forEach((row, idx) => {
      row.classList.remove('show'); // 새로고침 시 초기화
      setTimeout(() => {
        row.classList.add('show');
      }, 300 * idx); // 0.3초 간격으로 순차 등장
    });
  }, [reservations, selectedDate, selectedStatus]); // selectedStatus 추가

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  // 필터링된 예약 목록
  const filteredReservations = reservations.filter((reservation) => {
    if (selectedStatus === "all") return true;
    if (selectedStatus === "reserved") return reservation.status === "대회의실 예약";
    if (selectedStatus === "available") return reservation.status === "휴개실 예약";
    if (selectedStatus === "not-available") return reservation.status === "회의실 예약";
    return true;
  });

  return (
    <div className="meeting-room-status">
      <header className="s_header">
        <img src={logo} alt="U-PLUS SYSTEM 로고" className="logo-img" />
        <div className="s_header-title-wrapper">
          <h1 className="s_header-title">회의실 예약 현황</h1>
        </div>
      </header>
      <nav className="nav">
        <Link to="/MeetingRoomJoin" className="nav-button">사용자 회의실 등록</Link>
        <Link to="/MeetingRoomStatus" className="nav-button">사용자 회의실 현황</Link>
        <Link to="/A_MeetingRoomJoin" className="nav-button">회의실 등록</Link>
        <Link to="/A_MeetingRoomStatus" className="nav-button">회의실 현황/수정/삭제</Link>
        <Link to="/LoginPage" className="nav-button">로그인</Link>
      </nav>
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
          <select
            className="U_styled-select"
            id="status"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
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
            {filteredReservations.map((reservation, index) => (
              <tr key={index} className="reservation-row">
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

