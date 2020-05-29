import styled from 'styled-components';

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

const Review = styled.div`
  display: flex;
  padding: 10px;
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
    padding: 10px 10px 0;
    font-size: 14px;
    font-weight: 500;
    span:last-of-type {
      display: block;
      font-size: 12px;
      font-weight: 300;
    }
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
  return (
    <StyledDiv>
      <h2>리뷰</h2>
      {reviews.length === 0 ? (
        <LockDiv>
          <img src="/lock.svg" alt="lock icon" />
          로그인 후 리뷰를 볼 수 있습니다.
        </LockDiv>
      ) : (
        reviews.map((review, i) => (
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
        ))
      )}
    </StyledDiv>
  );
};

export default CocktailSummary;
