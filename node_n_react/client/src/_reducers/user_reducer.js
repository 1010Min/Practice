import {
    LOGIN_USER,
    REGISTER_USER
} from '../_actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
            break;

        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
    
        default:
            return state;
    }
    //다른 user_actions.js에서 type이 전송될 때마다 
    //처리해주기 위해 switch 문법 사용
    //type만 관리하기 위해 _actions폴더에 types.js 생성
}