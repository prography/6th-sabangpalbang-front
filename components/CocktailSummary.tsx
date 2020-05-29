import styled from 'styled-components';
import Tag from './Tag';

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
  & > div:last-of-type div {
    border-bottom: 0;
  }
  padding-bottom: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

const Row = styled.div`
  padding: 10px 0 0 4vw;
  display: flex;
`;

const Category = styled.div`
  img {
    width: 36px;
  }
  span {
    font-size: 13px;
    color: #7e7e7e;
    display: block;
    text-align: center;
  }
`;

const Content = styled.div`
  margin-left: 20px;
  margin-right: 2.5vw;
  flex: 1;
  border-bottom: 1px solid #ddd;
  display: flex;
  flew-wrap: wrap;
  align-items: center;
  color: #7e7e7e;
  ${({ flexDirection }: { flexDirection?: string }) =>
    flexDirection ? `flex-direction:${flexDirection};` : ''}
`;

const MeasuerList = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  margin: 3px 0;
  span {
    flex: 1;

    font-size: 13px;
    font-weight: 200;
  }
  span:last-of-type {
    flex: 0;
  }
`;
const LineContainer = styled.div`
  width: calc(100% - 10px);
  height: 10px;
  border: 0.5px solid #ccc;
  border-radius: 15px;
  position: relative;
  div {
    border-radius: 15px;
    position: absolute;
    width: 14%;
    height: 100%;
    top: 0;
    left: calc(50% - 13px);
    background-color: #ff306f;
  }
`;

interface IProps {
  abv: number;
  base: {
    text: string;
    href: string;
    textColor?: string;
    backgroundColor?: string;
  };
  ingredients: string[];
  flavor: string;
}

const CocktailSummary = ({ abv, base, ingredients, flavor }: IProps) => {
  return (
    <StyledDiv>
      <h2>요약</h2>
      <Row>
        <Category>
          <img src="/beer.svg" alt="도수" />
          <span>도수</span>
        </Category>
        <Content flexDirection={'column'}>
          <MeasuerList>
            <span>None</span>
            <span>0</span>
            <span>10</span>
            <span>20</span>
            <span>40+</span>
          </MeasuerList>
          <LineContainer>
            <div></div>
          </LineContainer>
        </Content>
      </Row>
      <Row>
        <Category>
          <img src="/wheat.svg" alt="베이스" />
          <span>베이스</span>
        </Category>
        <Content>
          <Tag
            text={base.text}
            href={base.href}
            backgroundColor={base.backgroundColor}
            textColor={base.textColor}
            fontSize={13}
          />
        </Content>
      </Row>
      <Row>
        <Category>
          <img src="/chef.svg" alt="재료" />
          <span>재료</span>
        </Category>
        <Content>
          {ingredients.map((text, i) => (
            <Tag text={text} href={''} fontSize={13} />
          ))}
        </Content>
      </Row>
      <Row>
        <Category>
          <img src="/cutlery.svg" alt="맛" />
          <span>맛</span>
        </Category>
        <Content>{flavor}</Content>
      </Row>
    </StyledDiv>
  );
};

export default CocktailSummary;
