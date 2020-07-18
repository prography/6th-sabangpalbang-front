import styled from 'styled-components';
import router from 'next/router';

import CocktailCardList from '../components/CocktailCardList';
import Navigation from '../components/TopNavigation';
import * as dummy from '../config/dummy';
import { useSelector } from 'react-redux';
import { RootState } from '../src/reducers';
import { useEffect } from 'react';

const Container = styled.div`
    .profile_area {
        background: #fff;
        
        .inner {
            display: flex;
            justify-content: space-around;
            align-items: center;
            max-width: 968px;
            margin: 0 auto;
            padding: 30px 0;

        }

        .profile {
            width: 80px;
            margin-left: 10%;
            
            .img_wrapper {
                overflow: hidden;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                border-radius: 50%;
                background: url(./mask.png) no-repeat;
                background-size: 50px;
            }
            .img {
                width: 100%;
                height: 100%;
            }
            .user_name {
                text-align: center;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                width: 100%;
                max-height: 36px;
                margin-top: 8px;
                font-family: sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                word-break: break-all;
            }
        }

        .num_cnt_area {
            flex: 1;
            text-align: center;

            .review {
                display: inline-block;
                font-weight: 500;
                font-size: 18px;
            }
            .like {
                display: inline-block;
                margin-left: 8%;
                font-weight: 500;
                font-size: 18px;
            }
            .cnt {
                margin-bottom: 5px;
            }
        }

        .update_btn_area {
            margin-right: 10%;
        }
        .update_btn::before {
            display: inline-block;
            vertical-align: -1px;
            width: 14px;
            height: 14px;
            margin-right: 5px;
            background: url(./ic_pen.png) no-repeat;
            background-size: 14px;
            content: '';
        }
        .update_btn {
            padding: 8px 12px;
            border: 1px solid #aeaeae;
            border-radius: 18px;
            font-family: "Noto Sans", sans-serif;
            font-size: 14px;
            line-height: 18px;
        }
    }
    .like_list_area {
        margin-top: 20px;
        background: #fff;
        .inner {
            max-width: 968px;
            margin: 0 auto;
        }

        .like_title {
            margin: 0 20px;
            padding: 20px 10px 5px;
            border-bottom: 1px solid #e4e4e4;
            font-size: 20px;
            line-height: 30px;
        }
    }
    @media screen and (min-width: 768px) {
        .profile_area {
            .profile {
                width: 160px;
                .user_name {
                    max-height: 40px;
                    font-size: 16px;
                    line-height: 20px;
                }
            }
            .num_cnt_area {
                .review, .like {
                    font-size: 20px;
                    line-height: 26px;
                }
            }
        }

        .like_list_area {
            .like_title {
                padding: 40px 20px 10px;
                font-size: 26px;
                line-height: 32px;
            }
        }
        .update_btn_area {
            width: 160px;
            text-align: center;
        }
    }
    @media screen and (max-width: 320px) {
        .profile_area {
            .num_cnt_area {
                .review {
                    display: block;
                }
                .like {
                    display: block;
                    margin: 10px 0 0;
                }
            }
        }
    }
`;

const MyPage = () => {
    const { userInfo } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if(userInfo.email === null) router.push('/login');
    }, [userInfo.email]);

    return (
        <>
            <Navigation />
            <Container>
                <div className="profile_area">
                    <div className="inner">
                        <div className="profile">
                            <div className="img_wrapper">
                                <img src={userInfo.profileImage} alt="프로필 이미지" className="img" />
                            </div>
                            <span className="user_name">{userInfo.username}</span>
                        </div>

                        <div className="num_cnt_area">
                            <div className="review">
                                <div className="cnt">0</div>리뷰
                            </div>
                            <div className="like">
                                <div className="cnt">5</div>즐겨찾기
                            </div>
                        </div>
                        <div className="update_btn_area">
                            <button type="button" className="update_btn">수정</button>
                        </div>
                    </div>
                </div>
                <div className="like_list_area">
                    <div className="inner">
                        <h2 className="like_title">즐겨찾기</h2>
                        <CocktailCardList cocktailList={dummy.mypage} tag={false} number={true} />
                    </div>
                </div>
            </Container>
        </>
    )
};

export default MyPage;