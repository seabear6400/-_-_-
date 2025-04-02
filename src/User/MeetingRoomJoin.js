import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../User_css/MeetingRoomJoin.css";
import Modal from "../Components/Modal";

const RoomRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "대회의실",
      image: "https://21gram.blog/wp-content/uploads/2023/10/%EA%B0%95%EC%95%84%EC%A7%80-%EC%9E%85%EB%B2%8C%EB%A6%BC-scaled.jpg", // 대체 이미지 URL
      capacity: "수용인원: 20명",
      info: "회의실 정보: 넓은 공간, 프로젝터 포함",
      equipment: "비치 장비: TV, 화이트보드",
    },
    {
      id: 2,
      name: "회의실",
      image: "https://21gram.blog/wp-content/uploads/2023/10/%EA%B0%95%EC%95%84%EC%A7%80-%EC%9E%85%EB%B2%8C%EB%A6%BC-scaled.jpg", // 대체 이미지 URL
      capacity: "수용인원: 10명",
      info: "회의실 정보: 중간 크기, 화이트보드 포함",
      equipment: "비치 장비: TV, 화이트보드",
    },
    {
      id: 3,
      name: "휴게실",
      image: "https://21gram.blog/wp-content/uploads/2023/10/%EA%B0%95%EC%95%84%EC%A7%80-%EC%9E%85%EB%B2%8C%EB%A6%BC-scaled.jpg", // 대체 이미지 URL
      capacity: "수용인원: 5명",
      info: "회의실 정보: 소규모 공간, 편안한 의자",
      equipment: "비치 장비: 커피머신, 소파",
    },
  ];

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setIsModalOpen(false);
  };

  return (
    <div className="room-registration">
      <header className="header">
        <h1>회의실 등록</h1>
      </header>
      <nav className="nav">
        <Link to="/">회의실 등록</Link>
        <Link to="/status">회의실 예약 현황</Link>
      </nav>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h2>{room.name}</h2>
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-info">
              <p>{room.capacity}</p>
              <p>{room.info}</p>
              <p>{room.equipment}</p>
            </div>
            <div className="room-actions">
              <button onClick={() => openModal(room)}>예약</button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedRoom && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>{selectedRoom.name}</h2>
          <form className="room-registration-form">
            <label>
              사용자 ID:
              <input type="text" name="userId" />
            </label>
            <label>
              날짜:
              <input type="date" name="date" />
            </label>
            <label>
              들어가는 시간:
              <input type="time" name="startTime" />
            </label>
            <label>
              나오는 시간:
              <input type="time" name="endTime" />
            </label>
            <label>
              인원 선택:
              <input type="number" name="participants" />
            </label>
            <div className="form-actions">
              <button type="submit">등록</button>
              <button type="button" onClick={closeModal}>
                취소
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default RoomRegistration;