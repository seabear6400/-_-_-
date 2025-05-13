import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../Manager_css/A_MeetingRoomJoin.css";
import "../Manager_css/A_room status.css";
import A_MeetingRoomForm from "./A_MeetingRoomForm"; // A_MeetingRoomForm 컴포넌트 import 추가
import MeetingRoomStatus from "../User/room status";

const AMeetingRoomStatus = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleEdit = (index) => {
    console.log("Edit button clicked for index:", index); // 디버깅용 로그
    setCurrentEditIndex(index);
    setIsModalOpen(true); // 모달 열기
  };

  const handleDelete = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
    alert(`${reservations[index].time} 예약이 삭제되었습니다.`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // 모달 닫기
    setCurrentEditIndex(null);
  };

  const handleReservationUpdate = (updatedReservation) => {
    const updatedReservations = reservations.map((reservation, index) =>
      index === currentEditIndex ? updatedReservation : reservation
    );
    setReservations(updatedReservations);
    handleModalClose();
  };

  return (
    <div className="a_meeting-room-status">
      <header className="status_header">
        <h1>회의실 예약 현황/수정/삭제</h1>
      </header>
      <nav className="a_nav">
        <Link to="/MeetingRoomJoin" className="a_nav-button">사용자 회의실 등록</Link>
        <Link to="/MeetingRoomStatus" className="a_nav-button">사용자 회의실 현황</Link>
        <Link to="/A_MeetingRoomJoin" className="a_nav-button">회의실 등록</Link>
        <Link to="/A_MeetingRoomStatus" className="a_nav-button">회의실 현황/수정/삭제</Link>
        <Link to="/LoginPage" className="a_nav-button">로그인</Link>
      </nav>
      <div className="a_calendar-container">
        <div className="a_calendar-header">
          날짜 선택:
          <input
            type="date"
            id="date"
            className="a_styled-date-input"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="a_calendar-header">
          예약현황:
          <select className="a_styled-select" id="status">
            <option value="all">전체</option>
            <option value="reserved">대회의실</option>
            <option value="available">휴개실</option>  
            <option value="not-available">회의실</option>
          </select>
        </div>
      </div>
      <div className="a_reservation-table">
        <h2>{selectedDate} 예약 현황</h2>
        <table>
          <thead>
            <tr>
              <th>사용자</th>
              <th>시간</th>
              <th>예약 현황</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.user}</td>
                <td>{reservation.time}</td>
                <td>{reservation.status}</td>
                <td>
                  <button className="Status_button" onClick={() => handleEdit(index)}>수정</button>
                </td>
                <td>
                  <button className="Status_button" onClick={() => handleDelete(index)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="a_modal-overlay">
          <div className="a_modal-content">
            <A_MeetingRoomForm
              reservation={reservations[currentEditIndex]}
              onClose={handleModalClose}
              onSave={handleReservationUpdate}
              buttonLabel="수정" // 버튼 텍스트를 "수정"으로 변경
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AMeetingRoomStatus;