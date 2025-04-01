import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Components/Modal";
import '../Manager_css/A_MeetingRoomForm.css';

export default function MeetingRoomForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isModalOpen, setModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log("예약 정보:", data);
  };

  console.log("isModalOpen 상태:", isModalOpen); // 디버깅용 로그

  return (
    <div>
      {/* 체크박스 */}
      <label>
        <input
          type="checkbox"
          onChange={(e) => setModalOpen(e.target.checked)}
        />
        대회의실 예약
      </label>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="meeting-room-form">
          <div className="form-container">
            <div className="form-content">
              <h2 className="form-title">대회의실 예약</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>사용자 ID</label>
                  <input
                    {...register("userId", { required: "사용자 ID를 입력해주세요." })}
                    placeholder="사용자 ID"
                    className="input-field"
                  />
                  {errors.userId && <p className="error-message">{errors.userId.message}</p>}
                </div>
                <div className="form-group">
                  <label>날짜</label>
                  <input
                    type="date"
                    {...register("date", { required: "날짜를 선택해주세요." })}
                    className="input-field"
                  />
                  {errors.date && <p className="error-message">{errors.date.message}</p>}
                </div>
                <div className="form-group">
                  <label>입실 시간</label>
                  <input
                    type="time"
                    {...register("startTime", { required: "입실 시간을 입력해주세요." })}
                    className="input-field"
                  />
                  {errors.startTime && <p className="error-message">{errors.startTime.message}</p>}
                </div>
                <div className="form-group">
                  <label>퇴실 시간</label>
                  <input
                    type="time"
                    {...register("endTime", { required: "퇴실 시간을 입력해주세요." })}
                    className="input-field"
                  />
                  {errors.endTime && <p className="error-message">{errors.endTime.message}</p>}
                </div>
                <div className="form-group">
                  <label>연락처</label>
                  <input
                    {...register("contact", { required: "연락처를 입력해주세요." })}
                    placeholder="연락처 입력"
                    className="input-field"
                  />
                  {errors.contact && <p className="error-message">{errors.contact.message}</p>}
                </div>
                <div className="button-group">
                  <button type="submit" className="submit-button">
                    예약 등록
                  </button>
                  <button
                    type="button"
                    onClick={() => reset()}
                    className="reset-button"
                  >
                    취소
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}