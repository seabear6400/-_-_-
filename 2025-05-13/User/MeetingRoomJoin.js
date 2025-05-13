import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../User_css/MeetingRoomJoin.css";
import Modal from "../Components/Modal";
import logo from "../uplus_ci.png"; // 로고 이미지 불러오기

const RoomRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    userId: "",
    date: "",
    startTime: "",
    endTime: "",
    participants: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // 성공 메시지 상태 추가

  useEffect(() => {
    if (isModalOpen) {
      const now = new Date();
      const formattedDate = now.toISOString().split("T")[0]; // YYYY-MM-DD 형식
      const formattedStartTime = now.toTimeString().slice(0, 5); // HH:MM 형식
      const formattedEndTime = new Date(now.getTime() + 30 * 60000) // 30분 뒤
        .toTimeString()
        .slice(0, 5);

      setFormData((prevFormData) => ({
        ...prevFormData,
        date: formattedDate,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
      }));
    }
  }, [isModalOpen]);

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
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setIsModalOpen(false);
    setFormData({
      userId: "",
      date: "",
      startTime: "",
      endTime: "",
      participants: "",
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userId) newErrors.userId = "사용자 ID를 입력하세요.";
    if (!formData.date) newErrors.date = "날짜를 선택하세요.";
    if (!formData.startTime) newErrors.startTime = "들어가는 시간을 입력하세요.";
    if (!formData.endTime) newErrors.endTime = "나오는 시간을 입력하세요.";
    if (
      formData.startTime &&
      formData.endTime &&
      formData.startTime >= formData.endTime
    )
      newErrors.time = "들어가는 시간은 나오는 시간보다 빨라야 합니다.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSuccessMessage("예약이 완료되었습니다!"); // 성공 메시지 설정
      console.log("폼 데이터 제출:", formData);
  
      // 1.5초 뒤에 메시지 숨기기
      setTimeout(() => setSuccessMessage(""), 1500);
  
      closeModal();
    }
  };

  return (
    <div className="room-registration">
      <header className="header">
        <h1>회의실 등록</h1>
      </header>
      <nav className="nav">
        <Link to="/MeetingRoomJoin" className="nav-button">사용자 회의실 등록</Link>
        <Link to="/MeetingRoomStatus" className="nav-button">사용자 회의실 현황</Link>
        <Link to="/A_MeetingRoomJoin" className="nav-button">회의실 등록</Link>
        <Link to="/A_MeetingRoomStatus" className="nav-button">회의실 현황/수정/삭제</Link>
        <Link to="/LoginPage" className="nav-button">로그인</Link>
      </nav>
      <img src={logo} alt="회사 로고" className="company-logo" /> {/* 로고 추가 */}
      
      {successMessage && (
        <>
          <div className="alert-overlay"></div>
          <div className="alert alert-success">{successMessage}</div>
        </>
      )}

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
          <h2 className="modal-title">{selectedRoom.name}</h2>
          <form className="room-registration-form" onSubmit={handleSubmit}>
            <label>
              사용자 ID:
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
              />
              {errors.userId && <p className="error">{errors.userId}</p>}
            </label>
            <label>
              날짜:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </label>
            <label>
              들어가는 시간:
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
              />
              {errors.startTime && <p className="error">{errors.startTime}</p>}
            </label>
            <label>
              나오는 시간:
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
              />
              {errors.endTime && <p className="error">{errors.endTime}</p>}
            </label>
           
            {errors.time && <p className="error">{errors.time}</p>}
            {errors.time && (
              <>
                <div className="alert-overlay"></div>
                <div className="alert alert-error">{errors.time}</div>
              </>
            )}
            <div className="form-actions">
              <button type="submit"><strong>예약</strong></button>
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