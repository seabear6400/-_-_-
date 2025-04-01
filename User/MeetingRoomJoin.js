import React from "react";
import  "../User_css/MeetingRoomJoin.css";

const RoomRegistration = () => {
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

  return (
    <div className="room-registration">
      <header className="header">
        <h1>회의실 등록</h1>
      </header>
        <nav className="nav">
          <button>회의실 등록</button>
          <button>회의실 수정/삭제</button>
          <button>회의실 예약 현황</button>
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
              <label>
                <input type="checkbox" />
                체크박스
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomRegistration;