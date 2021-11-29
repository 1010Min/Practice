import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from '../../../_actions/user_actions';
import {useNavigate} from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //email과 password를 위한 state 생성
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    //email과 password 입력 가능하게 만드는 부분
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); //page refresh 방지

        //현재 state에 어떤 정보가 있는지 확인하기 위함
        // console.log('Email', Email)
        // console.log('Password', Password)

        //ConfirmPassword와 Password가 같은지 확인
        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        
        //_actions폴더에 user_actions.js
        dispatch(registerUser(body))
            .then(response => {
            if(response.payload.success){
                //props.history.push("/login")
                navigate('/login') //로그인 성공시 메인 페이지로 이동
            } else{
                alert('Failed to sign up')
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
                
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>
                
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <br/>

                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
