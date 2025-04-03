import React, { useState } from "react";
import "../Manager_css/A_room status.css";
import A_MeetingRoomForm from "./A_MeetingRoomForm"; // A_MeetingRoomForm 컴포넌트 import

const AMeetingRoomStatus = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleEdit = (index) => {
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
    <div className="meeting-room-status">
      <header className="a_header">
        <h1>회의실 예약 현황/수정/삭제</h1>
      </header>
      <nav className="a_nav">
        <button>회의실 등록</button>
        <button>회의실 현황/수정/삭제</button>
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
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.time}</td>
                <td>{reservation.status}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>수정</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <A_MeetingRoomForm
              reservation={reservations[currentEditIndex]}
              onClose={handleModalClose}
              onSave={handleReservationUpdate}
              buttonLabel="A_MeetingRoomjoin" // 버튼 텍스트 변경
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AMeetingRoomStatus;