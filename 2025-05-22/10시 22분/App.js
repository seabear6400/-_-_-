import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ARoomRegistration from "./Manager/A_MeetingRoomJoin";
import AMeetingRoomStatus from "./Manager/A_room status";
import LoginPage from "./User/LoginPage";
import MeetingRoomJoin from "./User/MeetingRoomJoin"; // 추가
import RoomStatus from "./User/room status"; // 추가

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/MeetingRoomJoin" element={<MeetingRoomJoin />} /> {/* 추가 */}
        <Route path="/MeetingRoomStatus" element={<RoomStatus />} /> {/* 추가 */}
        <Route path="/" element={<ARoomRegistration />} />
        <Route path="/A_MeetingRoomJoin" element={<ARoomRegistration />} />
        <Route path="/A_MeetingRoomStatus" element={<AMeetingRoomStatus />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;