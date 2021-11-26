import axios from "axios";
import {
    LOGIN_USER
} from './types';

export function loginUser(dataToSubmit) {
    //server의 index에서 이미 작성된 부분 -> comparePassword, generateToken 등등
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    } //_reducers의 user_reducer.js를 통해 Reducer로 작업 전송
}