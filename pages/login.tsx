import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { loginRequest } from '../src/reducers/user';

const LoginContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    height: 162px;
    margin: auto;

    .notice {
        display: block;
        text-align: center;
        margin-bottom: 15px;
        font-family: "Noto Sans", sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        color: #000;
    }
    .login_btn {
        display: block;
        margin: 0 auto;
        padding: 15px 30px;
        border-radius: 4px;
        cursor: pointer;

        .icon {
            display: inline-block;
        }
        .text {
            display: inline-block;
            vertical-align: 7px;
            margin-left: 12px;
            font-family: "Noto Sans", sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
        }

        & + .login_btn {
            margin-top: 8px;
        }
    }
    .login_btn.naver {
        background-color: #00c73c;
        color: #fff;
    }
    .login_btn.kakao {
        background-color: #fdea58;
    }
`;

const Login = () => {
    const dispatch = useDispatch();

    const onNaverLogin = useCallback(() => {
        dispatch(loginRequest());
    }, []);
    const onKakaoLogin = useCallback(() => {

    }, []);

    return (
        <LoginContainer>
            <strong className="notice">로그인 후에 이용해주세요.</strong>
            <button type="button" className="login_btn naver" onClick={onNaverLogin}>
                <img src="ic_naver.png" width="26" height="26" className="icon" />
                <p className="text"> 네이버계정으로 로그인</p>
            </button>
            <button type="button" className="login_btn kakao" onClick={onKakaoLogin}>
                <img src="ic_kakao.png" width="26" height="26" className="icon" />
                <p className="text"> 네이버계정으로 로그인</p>
            </button>
        </LoginContainer>
    )
}

export default Login;