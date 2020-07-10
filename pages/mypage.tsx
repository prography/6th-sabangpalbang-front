import styled from 'styled-components';

import CocktailCardList from '../components/CocktailCardList';
import * as dummy from '../config/dummy';

const Container = styled.div`
    .profile_area {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 30px 0;
        background: #fff;

        .profile {
            width: 80px;
            margin-left: 10%;
            
            .img_wrapper {
                width: 50px;
                height: 50px;
                margin: 0 auto;
                border-radius: 50%;
                background: url(./mask.png) no-repeat;
                background-size: 50px;
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
    return (
        <Container>
            <div className="profile_area">
                <div className="profile">
                    <div className="img_wrapper">
                        <img src="" alt="" className="img" />
                    </div>
                    <span className="user_name">IRONMAN</span>
                </div>

                <div className="num_cnt_area">
                    <div className="review">
                        <div className="cnt">0</div>리뷰
                    </div>
                    <div className="like">
                        <div className="cnt">3</div>즐겨찾기
                    </div>
                </div>
                <div className="update_btn_area">
                    <button type="button" className="update_btn">수정</button>
                </div>
            </div>
            <div className="like_list_area">
                <CocktailCardList cocktailList={dummy.mypage} tag={false} />
            </div>
        </Container>
    )
};

export default MyPage;