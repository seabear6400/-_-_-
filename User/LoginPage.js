import React, { useState } from "react";
import "../User_css/LoginPage.css";  // CSS 파일을 import하여 스타일 적용

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 상태 관리

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>로그인</h2>
        <form>
          <input type="email" placeholder="이메일" className="input-field" />
          <input type="password" placeholder="비밀번호" className="input-field" />
          <button type="submit" className="login-btn">로그인</button>
        </form>
        {/* 회원가입 버튼 */}
        <div className="signup-container">
          <button className="signup-btn" onClick={openModal}>회원가입</button>
        </div>
      </div>

      {/* 회원가입 모달 */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>회원가입</h2>
            <form>
              <input type="email" placeholder="이메일" className="input-field" />
              <input type="password" placeholder="비밀번호" className="input-field" />
              <input type="password" placeholder="비밀번호 확인" className="input-field" />
              <button type="submit" className="signup-submit-btn">회원가입</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;