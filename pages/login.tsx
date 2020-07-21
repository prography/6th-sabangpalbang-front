import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import router from "next/router";

import { loginRequest } from '../src/reducers/user';
import { RootState } from '../src/reducers';

const LoginContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    height: 162px;
    margin: auto;
    text-align: center;

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
    .login_link {
        display: inline-block;
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
    .login_link.naver {
        margin-bottom: 10px;
        background-color: #00c73c;
        color: #fff;
    }
    .login_link.kakao {
        background-color: #fdea58;
    }
`;

const Login = () => {
    const { userInfo } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if(userInfo.email !== null) router.back();
    }, [userInfo.email]);

    return (
        <LoginContainer>
            <strong className="notice">로그인 후에 이용해주세요.</strong>
            <a href="#" className="login_link naver">
                <img src="ic_naver.png" width="26" height="26" className="icon" />
                <p className="text"> 네이버계정으로 로그인</p>
            </a>
            <br />
            <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=http://ec2co-ecsel-mzwwf8vj5hjb-108490878.ap-northeast-2.elb.amazonaws.com:3000/oauth/redirect&response_type=code`} className="login_link kakao">
                <img src="ic_kakao.png" width="26" height="26" className="icon" />
                <p className="text"> 카카오계정으로 로그인</p>
            </a>
        </LoginContainer>
    )
}

export default Login;