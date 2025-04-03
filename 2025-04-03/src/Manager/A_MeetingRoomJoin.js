import React, { useState } from "react";
import "../Manager_css/A_MeetingRoomJoin.css";
import Modal from "../Components/Modal"; // Modal 컴포넌트 import

const ARoomRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [selectedRoom, setSelectedRoom] = useState(null); // 선택된 회의실 정보

  const rooms = [
    {
      id: 1,
      name: "대회의실",
      image: "https://imageoptimzer.acon3d.com/?image=https%3A%2F%2Fstorage.acon3d.com%2Fproduct%2Faab7d31c0ba740ba8c1b5156e0a26f1a&width=2600&quality=70&watermark=true", // 대체 이미지 URL
      capacity: "🏢 대회의실 (20명)",
      info: "회의실 정보: 🎥 프로젝터 포함",
      equipment: "비치 장비: 📺 TV, 화이트보드",
    },
    {
      id: 2,
      name: "회의실",
      image: "https://imageoptimzer.acon3d.com/?image=https%3A%2F%2Fstorage.acon3d.com%2Fproduct%2Faab7d31c0ba740ba8c1b5156e0a26f1a&width=2600&quality=70&watermark=true", // 대체 이미지 URL
      capacity: "🏢 대회의실 (10명)",
      info: "회의실 정보: 🎥 프로젝터 포함",
      equipment: "비치 장비: 📺 TV, 화이트보드",
    },
    {
      id: 3,
      name: "휴게실",
      image: "https://imageoptimzer.acon3d.com/?image=https%3A%2F%2Fstorage.acon3d.com%2Fproduct%2Faab7d31c0ba740ba8c1b5156e0a26f1a&width=2600&quality=70&watermark=true://21gram.blog/wp-content/uploads/2023/10/%EA%B0%95%EC%95%84%EC%A7%80-%EC%9E%85%EB%B2%8C%EB%A6%BC-scaled.jpg", // 대체 이미지 URL
      capacity: "🏢 대회의실 (5명)",
      info: "회의실 정보: 🎥 프로젝터 포함",
      equipment: "비치 장비: 📺 TV,  화이트보드",
    },
  ];

  const openModal = (room) => {
    setSelectedRoom(room); // 선택된 회의실 정보 저장
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setSelectedRoom(null); // 선택된 회의실 정보 초기화
    setIsModalOpen(false); // 모달 닫기
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const formData = new FormData(event.target);
    const userId = formData.get("userId");
    const date = formData.get("date");
    const startTime = formData.get("startTime");
    const endTime = formData.get("endTime");
    const participants = formData.get("participants");

    // 유효성 검사
    if (!userId || !date || !startTime || !endTime || !participants) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (new Date(`${date}T${startTime}`) >= new Date(`${date}T${endTime}`)) {
      alert("시작 시간은 종료 시간보다 빨라야 합니다.");
      return;
    }

    if (participants <= 0) {
      alert("참여 인원은 1명 이상이어야 합니다.");
      return;
    }

    // 유효성 검사를 통과한 경우
    alert("예약이 성공적으로 등록되었습니다!");
    closeModal(); // 모달 닫기
  };

  return (
    <div className="a_room-registration">
      <header className="a_header">
        <h1>회의실 등록</h1>
      </header>
      <nav className="a_nav">
        <button>회의실 등록</button>
        <button>회의실 현황/수정/삭제</button>
      </nav>
      <div className="a_room-list">
        {rooms.map((room) => (
          <div key={room.id} className="a_room-card">
            <h2>{room.name}</h2>
            <img src={room.image} alt={room.name} className="a_room-image" />
            <div className="a_room-info">
              <p>{room.capacity}</p>
              <p>{room.info}</p>
              <p>{room.equipment}</p>
            </div>
            <div className="a_room-actions">
              <button onClick={() => openModal(room)}>예약</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal 컴포넌트 */}
      {isModalOpen && selectedRoom && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>{selectedRoom.name}</h2>
          <form className="room-registration-form" onSubmit={handleSubmit}>
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

export default ARoomRegistration;
