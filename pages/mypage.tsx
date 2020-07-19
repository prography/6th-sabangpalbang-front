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
            padding: 17px 0;

        }

        .profile {
            display: flex;
            align-items: center;
            flex: 1;
            width: 160px;
            margin-left: 5%;
            
            .img_wrapper {
                overflow: hidden;
                flex: 0 0 80px;
                height: 80px;
                margin-right: 16px;
                border-radius: 50%;
                background: url(./mask.png) no-repeat;
                background-size: 50px;
            }
            .img {
                width: 100%;
                height: 100%;
            }
            .user_name {
                flex: 1;
                text-align: left;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                max-height: 56px;
                font-family: sans-serif;
                font-weight: bold;
                font-size: 20px;
                line-height: 28px;
                word-break: break-all;
            }
        }

        .num_cnt_area {
            flex-basis: 120px;
            text-align: center;
            font-weight: 600;
            font-size: 18px;

            .review {
                display: inline-block;
                text-align: center;
            }
            .like {
                display: inline-block;
                text-align: center;
                margin-left: 20px;
            }
            .cnt {
                margin-bottom: 5px;
            }
        }
        .update_btn_area {
            flex: 1;
            margin-right: 5%;
            text-align: right;
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
            .num_cnt_area {
                .like, .review {
                    font-size: 19px;
                    line-height: 27px;
                }
                .cnt {
                    font-size: 22px;
                    line-height: 30px;
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
    }
    @media screen and (max-width: 430px) {
        .profile_area {
            .profile {
                .img_wrapper {
                    flex-basis: 60px;
                    height: 60px;
                }
                .user_name {
                    max-height: 54px;
                    font-size: 14px;
                    line-height: 18px;
                    -webkit-line-clamp: 3;
                }
            }
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

    if(!userInfo.email) return null;

    return (
        <>
            <Navigation />
            <Container>
                <div className="profile_area">
                    <div className="inner">
                        <div className="profile">
                            <div className="img_wrapper">
                                <img src={userInfo.profileURL} alt="프로필 이미지" className="img" />
                            </div>
                            <span className="user_name">{userInfo.name}</span>
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