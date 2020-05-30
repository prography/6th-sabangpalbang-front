import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.div`
  background-color: white;
  h2 {
    width: 95vw;
    margin: 0 auto;
    font-size: 28px;
    font-weight: 700;
    padding: 14px 10px 10px;
    border-bottom: 1px solid #ddd;
  }
  padding-bottom: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

const LockDiv = styled.div`
  padding: 40px;
  text-align: center;
  color: #aeaeae;
  img {
    width: 48px;
    margin: 0 auto 15px;
    display: block;
  }
`;
const Reviews = styled.div`
  div:last-of-type > div {
    border-bottom: 0;
  }
`;
const Review = styled.div`
  display: flex;
  padding: 10px;
  padding-bottom: 0;
  div:first-of-type {
    img {
      margin: 0 auto;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      margin-bottom: 7px;
    }
    span {
      display: inline-block;
      width: 60px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
    }
  }
  div:last-of-type {
    flex: 1;
    overflow-wrap: anywhere;
    padding: 5px 10px 10px;
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #eaeaea;
    span:last-of-type {
      display: block;
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

const ReviewListLink = styled.a`
  font-size: 14px;
  font-weight: 700;
  display: block;
  width: 95vw;
  margin: 10px auto 0;
  padding: 10px;
  text-align: center;
  border-top: 1px solid #ddd;
`;
const WriteReviewButton = styled.div`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: block;
  width: 80vw;
  margin: 0 auto;
  padding: 10px;
  padding-bottom: 0;
  text-align: center;
  border-top: 1px solid #eaeaea;
`;

const BackgroundBlur = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const WriteForm = styled.form`
  display: ${({ display }: { display: boolean }) =>
    display ? 'flex' : 'none'};
  flex-direction: column;
  box-shadow: 0 0 0 800px rgba(0, 0, 0, 0.4);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #fff;
  z-index: 3;
  height: 50vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .textarea {
    flex: 1;
    border: 1px solid #e4e4e4;
    border-top: 0;
    resize: none;
    width: 95vw;
    min-height: 150px;
    margin: 0 auto;
    display: block;
  }
`;

const ButtonList = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-around;

  button {
    padding: 8px;
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40vw;
    border-radius: 20px;
    border: 1px solid #aaa;
    background-color: #fff;
  }
  .write {
    border: 0;
    background-color: #ff306f;
    color: #fff;
  }
`;

interface IProps {
  reviews: {
    src: string;
    alt: string;
    name: string;
    isFavorite: boolean;
    text: string;
    day: string;
  }[];
}

const CocktailSummary = ({ reviews }: IProps) => {
  const [formDisplay, setFormDisplay] = useState(false);
  return (
    <StyledDiv>
      <h2>리뷰</h2>
      {reviews.length === 0 ? (
        <LockDiv>
          <img src='/lock.svg' alt='lock icon' />
          로그인 후 리뷰를 볼 수 있습니다.
        </LockDiv>
      ) : (
        <>
          <Reviews>
            {reviews.map((review, i) => (
              <Review key={i}>
                <div>
                  <img src={review.src} alt={review.alt} />
                  <span>{review.name}</span>
                </div>
                <div>
                  {review.text}
                  <span>{review.day}</span>
                </div>
              </Review>
            ))}
          </Reviews>
          <Link href='/detail/_cocktailid/reviews'>
            <ReviewListLink>리뷰 더보기</ReviewListLink>
          </Link>
          <WriteReviewButton
            onClick={(e) => {
              e.preventDefault();
              setFormDisplay(true);
            }}
          >
            리뷰 작성
          </WriteReviewButton>
          <WriteForm display={formDisplay} action=''>
            <h2 className='title'>리뷰</h2>
            <textarea className='textarea' />
            <ButtonList>
              <button className='write' type='submit'>
                작성
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setFormDisplay(false);
                }}
              >
                취소
              </button>
            </ButtonList>
          </WriteForm>
        </>
      )}
    </StyledDiv>
  );
};

export default CocktailSummary;
