import React, { useState } from "react";
import "../Manager_css/A_room status.css";

const AMeetingRoomStatus = () => {
  const [selectedDate, setSelectedDate] = useState("2024-04-07");
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

  const handleEdit = (index) => {
    alert(`${reservations[index].time} 예약을 수정합니다.`);
  };

  const handleDelete = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
    alert(`${reservations[index].time} 예약이 삭제되었습니다.`);
  };

  return (
    <div className="meeting-room-status">
      <h1>회의실 예약 현황</h1>
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
    </div>
  );
};

export default AMeetingRoomStatus;