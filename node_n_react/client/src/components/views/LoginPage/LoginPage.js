import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from '../../../_actions/user_actions';
import { useNavigate } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //email과 password를 위한 state 생성
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    //email과 password 입력 가능하게 만드는 부분
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); //page refresh 방지

        //현재 state에 어떤 정보가 있는지 확인하기 위함
        // console.log('Email', Email)
        // console.log('Password', Password)

        let body = {
            email: Email,
            password: Password
        }
        
        //_actions폴더에 user_actions.js
        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess){
                    navigate('/') //로그인 성공시 메인 페이지로 이동
                } else{
                    alert('Error')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value ={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <br/>

                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage