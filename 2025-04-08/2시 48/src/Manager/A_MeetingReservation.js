
import React from "react";
import "../Manager_css/A_MeetingReservation.css"

const ReservationPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>회원 예약 페이지</h1>
      </header>

      {/* Navigation */}
      <nav>
        <a href="MeetingRoomJoin.js">회의실 등록</a>
        <a href="#" >회의실 수정</a>
        <a href="#" >회의실 삭제</a>
        <a href="#" >회의실 예약 현황</a>
      </nav>

      {/* Main Content */}
      <main >
        <div >
          <h2 >예약현황</h2>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <span>&copy; U-PLUS SYSTEM</span>
      </footer>
    </div>
  );
};

export default ReservationPage;s