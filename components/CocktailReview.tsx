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
const WirteReviewButton = styled.div`
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
  return (
    <StyledDiv>
      <h2>리뷰</h2>
      {reviews.length === 0 ? (
        <LockDiv>
          <img src="/lock.svg" alt="lock icon" />
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
          <Link href="">
            <ReviewListLink>리뷰 더보기</ReviewListLink>
          </Link>
          <WirteReviewButton>리뷰 작성</WirteReviewButton>
        </>
      )}
    </StyledDiv>
  );
};

export default CocktailSummary;
