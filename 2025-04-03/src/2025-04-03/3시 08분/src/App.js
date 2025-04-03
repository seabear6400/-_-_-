import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomRegistration from "./User/MeetingRoomJoin"; // 회의실 등록 페이지
import MeetingRoomStatus from "./User/room status"; // 회의실 예약 현황 페이지
import LoginPage from "./User/LoginPage"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoomRegistration />} /> {/* 회의실 등록 */}
        <Route path="/status" element={<MeetingRoomStatus />} /> {/* 회의실 예약 현황 */}
        <Route path="/login" element={<LoginPage />} /> {/* 로그인 페이지 */}
      </Routes>
    </Router>
  );
};

export default App;