import React, { useState } from "react";
import "../User_css/LoginPage.css";  // CSS 파일을 import하여 스타일 적용
import logo from "../uplus_ci.png"; // 로고 이미지 불러오기

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 상태 관리
  const [isSignupComplete, setIsSignupComplete] = useState(false); // 회원가입 완료 모달 상태 추가
  const [isLoginSuccess, setIsLoginSuccess] = useState(false); // 로그인 성공 모달 상태 추가
  const [formData, setFormData] = useState({
    member_id: "", // email -> member_id로 변경
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    contactEmail: "",
    department: "",
    position: "",
  });
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({ member_id: "", password: "" }); // email -> member_id로 변경
  const [loginErrors, setLoginErrors] = useState({});

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      member_id: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      contactEmail: "",
      department: "",
      position: "",
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
    if (!formData.member_id) newErrors.member_id = "아이디를 입력해주세요."; // email -> member_id로 변경
    if (!formData.password) newErrors.password = "비밀번호를 입력해주세요.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    if (!formData.name) newErrors.name = "이름을 입력해주세요.";
    if (!formData.department) newErrors.department = "부서를 입력해주세요.";
    if (!formData.position) newErrors.position = "직책을 입력해주세요.";
    if (!formData.phone) newErrors.phone = "전화번호를 입력해주세요.";
    if (!formData.contactEmail) newErrors.contactEmail = "이메일 주소를 입력해주세요.";
    return newErrors;
  };

  // 유효성 검사 (로그인)
  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.member_id) newErrors.member_id = "아이디를 입력해주세요."; // email -> member_id로 변경
    if (!loginData.password) newErrors.password = "비밀번호를 입력해주세요.";
    return newErrors;
  };

  // 폼 제출 핸들러 (회원가입)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // 첫 번째 에러 필드로 포커스 이동 (회원가입 모달)
      setTimeout(() => {
        const firstErrorField = Object.keys(validationErrors)[0];
        const errorElement = document.querySelector(
          '.login_modal-content [name="' + firstErrorField + '"]'
        );
        if (errorElement) errorElement.focus();
      }, 0);
    } else {
      setIsSignupComplete(true); // 회원가입 완료 모달 열기
      // closeModal(); // 회원가입 완료 후 모달 닫기는 완료 모달에서 처리
    }
  };

  // 회원가입 완료 모달 닫기
  const closeSignupCompleteModal = () => {
    setIsSignupComplete(false);
    closeModal(); // 회원가입 폼 모달도 닫기
  };

  // 폼 제출 핸들러 (로그인)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length > 0) {
      setLoginErrors(validationErrors);

      // 첫 번째 에러 필드로 포커스 이동
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(
        `.login-form [name="${firstErrorField}"]`
      );
      if (errorElement) errorElement.focus();

    } else {
      setIsLoginSuccess(true); // 로그인 성공 모달 열기
      // 로그인 성공 로직 추가
    }
  };

  // 로그인 성공 모달 닫기
  const closeLoginSuccessModal = () => {
    setIsLoginSuccess(false);
    // 필요하다면 로그인 후 이동 등 추가
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>로그인</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text" // email -> text로 변경
            name="member_id" // name="email" -> name="member_id"로 변경
            placeholder="아이디"
            className="input-field"
            value={loginData.member_id} // loginData.email -> loginData.member_id로 변경
            onChange={handleLoginChange}
          />
          {loginErrors.member_id && <p className="error">{loginErrors.member_id}</p>} 
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
        <div className="login_modal">
          <div className="login_modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text" // email -> text로 변경
                name="member_id" // name="email" -> name="member_id"로 변경
                placeholder="아이디"
                className="input-field"
                value={formData.member_id} // formData.email -> formData.member_id로 변경
                onChange={handleChange}
              />
              {errors.member_id && <p className="error">{errors.member_id}</p>} 
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
                name="department"
                placeholder="부서"
                className="input-field"
                value={formData.department || ""}
                onChange={handleChange}
              />
              {errors.department && <p className="error">{errors.department}</p>}
              <input
                type="text"
                name="position"
                placeholder="직책"
                className="input-field"
                value={formData.position || ""}
                onChange={handleChange}
              />
              {errors.position && <p className="error">{errors.position}</p>}
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

      {/* 회원가입 완료 모달 */}
      {isSignupComplete && (
        <div className="login_modal">
          <div className="login_modal-content" style={{ textAlign: "center" }}>
            <h2 style={{ color: "#4CAF50" }}>회원가입 완료!</h2>
            <p>회원가입이 성공적으로 완료되었습니다.</p>
            <button
              className="signup-submit-btn"
              style={{ marginTop: "20px" }}
              onClick={closeSignupCompleteModal}
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* 로그인 성공 모달 */}
      {isLoginSuccess && (
        <div className="login_modal">
          <div className="login_modal-content" style={{ textAlign: "center" }}>
            <h2 style={{ color: "#4CAF50" }}>로그인 성공!</h2>
            <p>정상적으로 로그인되었습니다.</p>
            <button
              className="signup-submit-btn"
              style={{ marginTop: "20px" }}
              onClick={closeLoginSuccessModal}
            >
              확인
            </button>
          </div>
        </div>
      )}

      <img src={logo} alt="회사 로고" className="company-logo" /> {/* 로고 추가 */}
    </div>
  );
};

export default LoginPage;