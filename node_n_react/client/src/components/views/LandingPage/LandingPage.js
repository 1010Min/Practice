import React, {useEffect} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
//import { response } from "express";

function LandingPage(props) {

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])
    
    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success){
                alert('로그아웃에 성공했습니다.')
                navigate('/login')
            } else{
                alert('로그아웃에 실패했습니다.')
            }
        })
    }

    return (
        <div>
            <NavBar/>
            
            <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '25vh' }}>
                시작 페이지
            </h2>

            <button style={{width:'100px',margin: 'auto', display:'block'}}onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage