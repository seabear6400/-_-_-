import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../Manager_css/A_MeetingRoomJoin.css";
import "../Manager_css/A_room status.css"; 
import "../User_css/MeetingRoomJoin.css"; // CSS 파일 import
import Modal from "../Components/Modal"; // Modal 컴포넌트 import
import CustomAlert from "../Components/CustomAlert"; // CustomAlert 컴포넌트 import

const ARoomRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [selectedRoom, setSelectedRoom] = useState(null); // 선택된 회의실 정보
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
    setSelectedRoom(room); // 선택된 회의실 정보 저장
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setSelectedRoom(null); // 선택된 회의실 정보 초기화
    setIsModalOpen(false); // 모달 닫기
    setFormData({
      userId: "",
      date: "",
      startTime: "",
      endTime: ""
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
      setSuccessMessage("예약이 성공적으로 등록되었습니다!"); // 성공 메시지 설정
      setTimeout(() => setSuccessMessage(""), 1500); // 1.5초 뒤 메시지 숨기기
      closeModal();
    }
  };

  return (
    <div className="a_room-registration">
      <header className="header">
        <h1>회의실 등록</h1>
      </header>
      <nav className="a_nav">
        <Link to="/MeetingRoomJoin" className="a_nav-button">사용자 회의실 등록</Link>
        <Link to="/MeetingRoomStatus" className="a_nav-button">사용자 회의실 현황</Link>
        <Link to="/A_MeetingRoomJoin" className="a_nav-button">회의실 등록</Link>
        <Link to="/A_MeetingRoomStatus" className="a_nav-button">회의실 현황/수정/삭제</Link>
        <Link to="/LoginPage" className="a_nav-button">로그인</Link>
      </nav>

      {successMessage && (
        <CustomAlert message={successMessage} />
      )}

      <div className="room-list">
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

      {isModalOpen && selectedRoom && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>{selectedRoom.name}</h2>
          <form className="a_room-registration-form" onSubmit={handleSubmit}>
            <label>
              사용자 ID:
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
              />
              {errors.userId && <p className="a_error">{errors.userId}</p>}
            </label>
            <label>
              날짜:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              {errors.date && <p className="a_error">{errors.date}</p>}
            </label>
            <label>
              들어가는 시간:
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
              />
              {errors.startTime && <p className="a_error">{errors.startTime}</p>}
            </label>
            <label>
              나오는 시간:
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
              />
              {errors.endTime && <p className="a_error">{errors.endTime}</p>}
            </label>
            {errors.time && <p className="a_error">{errors.time}</p>}
            <div className="a_form-actions">
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

export default ARoomRegistration;
