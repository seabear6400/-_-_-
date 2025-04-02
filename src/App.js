import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomRegistration from "./User/MeetingRoomJoin"; // 회의실 등록 페이지
import MeetingRoomStatus from "./User/room status"; // 회의실 예약 현황 페이지

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoomRegistration />} /> {/* 회의실 등록 */}
        <Route path="/status" element={<MeetingRoomStatus />} /> {/* 회의실 예약 현황 */}
      </Routes>
    </Router>
  );
};

export default App;