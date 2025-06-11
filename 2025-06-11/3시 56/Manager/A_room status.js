import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "../Manager_css/A_MeetingRoomJoin.css";
import "../Manager_css/A_room status.css";
import A_MeetingRoomForm from "./A_MeetingRoomForm"; // A_MeetingRoomForm 컴포넌트 import 추가
import CustomAlert from "../Components/CustomAlert"; // CustomAlert 컴포넌트 import
import Modal from "../Components/Modal"; // Modal 컴포넌트 import
import logo from "../uplus_ci.png"; // 로고 이미지 불러오기

const AMeetingRoomStatus = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0] // 현재 날짜를 기본값으로 설정
  );
  const [reservations, setReservations] = useState([
    { user: "김성우 사원",  startTime: "09:00", endTime: "10:00", status: "회의실 예약" },
    { user: "김성우 사원",  startTime: "10:00", endTime: "11:00", status: "대회의실 예약" },
    { user: "김성우 사원",  startTime: "11:00", endTime: "12:00", status: "휴개실 예약" },
    { user: "김성우 사원",  startTime: "12:00", endTime: "13:00", status: "휴개실 예약" },
    { user: "김성우 사원",  startTime: "13:00", endTime: "14:00", status: "회의실 예약" },
    { user: "김성우 사원",  startTime: "14:00", endTime: "15:00", status: "대회의실 예약" },
    { user: "김성우 사원",  startTime: "15:00", endTime: "16:00", status: "대회의실 예약" },
    { user: "김성우 사원",  startTime: "16:00", endTime: "17:00", status: "휴개실 예약" },
    { user: "김성우 사원",  startTime: "17:00", endTime: "18:00", status: "회의실 예약" },
    { user: "김성우 사원",  startTime: "18:00", endTime: "19:00", status: "대회의실 예약" },
    { user: "김성우 사원",  startTime: "19:00", endTime: "20:00", status: "휴개실 예약" },
    // 나머지 예약 데이터도 동일하게 수정
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // 삭제 확인 모달 상태
  const [deleteIndex, setDeleteIndex] = useState(null); // 삭제할 예약의 인덱스
  const [fade, setFade] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all"); // 상태값 초기화

  useEffect(() => {
    setFade(true);
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleEdit = (index) => {
    console.log("Edit button clicked for index:", index); // 디버깅용 로그
    setCurrentEditIndex(index);
    setIsModalOpen(true); // 모달 열기
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index); // 삭제할 예약의 인덱스 설정
    setIsConfirmModalOpen(true); // 삭제 확인 모달 열기
  };

  const confirmDelete = () => {
    const updatedReservations = reservations.filter((_, i) => i !== deleteIndex);
    setReservations(updatedReservations);
    setAlertMessage(`${reservations[deleteIndex].startTime} 예약이 삭제되었습니다.`); // 커스텀 알림 표시

    // 1.5초 후 알림 닫기
    setTimeout(() => {
      setAlertMessage(null);
    }, 1500);

    setIsConfirmModalOpen(false); // 삭제 확인 모달 닫기
    setDeleteIndex(null); // 삭제 인덱스 초기화
  };

  const cancelDelete = () => {
    setIsConfirmModalOpen(false); // 삭제 확인 모달 닫기
    setDeleteIndex(null); // 삭제 인덱스 초기화
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
    setAlertMessage("예약이 성공적으로 수정되었습니다."); // 커스텀 알림 표시

    // 1.5초 후 알림 닫기
    setTimeout(() => {
      setAlertMessage(null);
    }, 1500);

    handleModalClose();
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value); // 옵션 변경 시 상태값 변경
    setFade(false); // fade 효과 끄기
    setTimeout(() => setFade(true), 10); // 잠깐 뒤에 다시 켜기 (애니메이션 재실행)
  };

  // 필터링된 예약 목록
  const filteredReservations = reservations.filter((reservation) => {
    if (selectedStatus === "all") return true;
    if (selectedStatus === "conference") return reservation.status === "대회의실 예약";
    if (selectedStatus === "break") return reservation.status === "휴개실 예약";
    if (selectedStatus === "meeting") return reservation.status === "회의실 예약";
    return true;
  });

  return (
    <div className="a_meeting-room-status">
      <header className="s_header">
        <img src={logo} alt="U-PLUS SYSTEM 로고" className="logo-img" />
        <div className="s_header-title-wrapper">
          <h1 className="s_header-title">회의실 예약 현황/수정/삭제</h1>
        </div>
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
          <select
            className="a_styled-select"
            id="status"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="all">전체</option>
            <option value="conference">대회의실</option>
            <option value="break">휴개실</option>
            <option value="meeting">회의실</option>
          </select>
        </div>
      </div>
      {/* 여기서부터 fade-in */}
      <div className={`a_reservation-table${fade ? " fade-in" : ""}`}>
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
            {filteredReservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.user}</td>
                <td>{reservation.startTime} - {reservation.endTime}</td>
                <td>{reservation.status}</td>
                <td>
                  <button className="Status_button" onClick={() => handleEdit(index)}>수정</button>
                </td>
                <td>
                  <button className="Status_button" onClick={() => handleDeleteClick(index)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 이하 모달 등은 그대로 */}
      {isModalOpen && (
        <A_MeetingRoomForm
          reservation={reservations[currentEditIndex]} // 예약 데이터 전달
          onClose={handleModalClose}
          onSave={handleReservationUpdate}
          buttonLabel="수정" // 버튼 텍스트를 "수정"으로 변경
        />
      )}
      {isConfirmModalOpen && (
        <Modal isOpen={isConfirmModalOpen} onClose={cancelDelete}>
          <h2>{reservations[deleteIndex]?.startTime} 예약을 삭제하시겠습니까?</h2>
          <div className="a_form-actions">
            <button className="Status_button" onClick={confirmDelete}>확인</button>
            <button className="Status_button" onClick={cancelDelete}>취소</button>
          </div>
        </Modal>
      )}
      {alertMessage && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
        />
      )}
    </div>
  );
};

export default AMeetingRoomStatus;