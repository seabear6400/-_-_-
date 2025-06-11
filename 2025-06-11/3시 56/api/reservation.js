// src/api/reservation.js
import axios from './axios'; // 커스터마이즈된 axios 인스턴스

// 회의실 예약 생성
export const createReservation = (reservationData) => {
    return axios.post('/reservations', reservationData);
};

// 다른 예약 API 함수들도 여기에 추가 가능
export const getAllReservations = () => {
    return axios.get('/reservations');
};

export const getReservationById = (id) => {
    return axios.get(`/reservations/${id}`);
};

export const updateReservation = (id, updatedData) => {
    return axios.put(`/reservations/${id}`, updatedData);
};

export const deleteReservation = (id) => {
    return axios.delete(`/reservations/${id}`);
};
