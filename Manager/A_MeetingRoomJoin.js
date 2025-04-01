import React, { useState } from "react";
import "../Manager_css/A_MeetingRoomJoin.css";
import Modal from "../Components/Modal"; // Modal 컴포넌트 import

const ARoomRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [selectedRoom, setSelectedRoom] = useState(null); // 선택된 회의실 정보
  const [checkedRoomId, setCheckedRoomId] = useState(null); // 체크된 체크박스 ID 관리

  const rooms = [
    {
      id: 1,
      name: "대회의실",
      image: "https://21gram.blog/wp-content/uploads/2023/10/%EA%B0%95%EC%95%84%EC%A7%80-%EC%9E%85%EB%B2%8C%EB%A6%BC-scaled.jpg",
      capacity: "수용인원: 20명",
      info: "회의실 정보: 넓은 공간, 프로젝터 포함",
      equipment: "비치 장비: TV, 화이트보드",
    },
    {
      id: 2,
      name: "회의실",
      image: "https://21gram.blog/wp-content/uploads/2023/10/%EA%B0%95%EC%95%84%EC%A7%80-%EC%9E%85%EB%B2%8C%EB%A6%BC-scaled.jpg",
      capacity: "수용인원: 10명",
      info: "회의실 정보: 중간 크기, 화이트보드 포함",
      equipment: "비치 장비: TV, 화이트보드",
    },
    {
      id: 3,
      name: "휴게실",
      image: "https://21gram.blog/wp-content/uploads/2023/10/%EA%B0%95%EC%95%84%EC%A7%80-%EC%9E%85%EB%B2%8C%EB%A6%BC-scaled.jpg",
      capacity: "수용인원: 5명",
      info: "회의실 정보: 소규모 공간, 편안한 의자",
      equipment: "비치 장비: 커피머신, 소파",
    },
  ];

  const openModal = (room) => {
    setSelectedRoom(room); // 선택된 회의실 정보 저장
    setIsModalOpen(true); // 모달 열기
    setCheckedRoomId(room.id); // 체크된 체크박스 ID 저장
  };

  const closeModal = () => {
    setSelectedRoom(null); // 선택된 회의실 정보 초기화
    setIsModalOpen(false); // 모달 닫기
    setCheckedRoomId(null); // 체크박스 상태 초기화
  };

  return (
    <div className="a_room-registration">
      <header className="a_header">
        <h1>회의실 등록</h1>
      </header>
      <nav className="a_nav">
        <button>회의실 등록</button>
        <button>회의실 수정/삭제</button>
        <button>회의실 예약 현황</button>
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
              <label>
                <input
                  type="checkbox"
                  checked={checkedRoomId === room.id} // 체크 상태 관리
                  onChange={(e) => {
                    if (e.target.checked) {
                      openModal(room); // 체크박스가 체크되면 모달 열기
                    } else {
                      closeModal(); // 체크박스가 해제되면 모달 닫기
                    }
                  }}
                />
                체크박스
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Modal 컴포넌트 */}
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

export default ARoomRegistration;