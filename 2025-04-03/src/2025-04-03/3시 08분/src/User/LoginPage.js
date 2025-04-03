import React, { useState } from "react";
import "../User_css/LoginPage.css";  // CSS 파일을 import하여 스타일 적용

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    contactEmail: "",
  });
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      contactEmail: "",
    });
    setErrors({});
  };

  // 입력값 변경 핸들러 (회원가입)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 입력값 변경 핸들러 (로그인)
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // 유효성 검사 (회원가입)
  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "아이디를 입력해주세요.";
    if (!formData.password) newErrors.password = "비밀번호를 입력해주세요.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    if (!formData.name) newErrors.name = "이름을 입력해주세요.";
    if (!formData.phone) newErrors.phone = "전화번호를 입력해주세요.";
    if (!formData.contactEmail) newErrors.contactEmail = "이메일 주소를 입력해주세요.";
    return newErrors;
  };

  // 유효성 검사 (로그인)
  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = "아이디를 입력해주세요.";
    if (!loginData.password) newErrors.password = "비밀번호를 입력해주세요.";
    return newErrors;
  };

  // 폼 제출 핸들러 (회원가입)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("회원가입이 완료되었습니다!");
      closeModal();
    }
  };

  // 폼 제출 핸들러 (로그인)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length > 0) {
      setLoginErrors(validationErrors);
    } else {
      alert("로그인 성공!");
      // 로그인 성공 로직 추가
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>로그인</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="아이디"
            className="input-field"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          {loginErrors.email && <p className="error">{loginErrors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="input-field"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          {loginErrors.password && <p className="error">{loginErrors.password}</p>}
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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="아이디"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                className="input-field"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              <input
                type="text"
                name="name"
                placeholder="이름"
                className="input-field"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="text"
                name="phone"
                placeholder="전화번호"
                className="input-field"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
              <input
                type="email"
                name="contactEmail"
                placeholder="이메일주소"
                className="input-field"
                value={formData.contactEmail}
                onChange={handleChange}
              />
              {errors.contactEmail && <p className="error">{errors.contactEmail}</p>}
              <div className="button-container">
                <button type="submit" className="signup-submit-btn">회원가입</button>
                <button type="button" className="cancel-btn" onClick={closeModal}>취소</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;