import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ARoomRegistration from "./Manager/A_MeetingRoomJoin";
import AMeetingRoomStatus from "./Manager/A_room status";
import LoginPage from "./User/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< ARoomRegistration />} /> {/* 기본 경로를 AMeetingRoomForm으로 변경 */}
        <Route path="/A_MeetingRoomJoin" element={<ARoomRegistration />} />
        <Route path="/A_MeetingRoomStatus" element={<AMeetingRoomStatus />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;