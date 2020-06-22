import styled from 'styled-components';
import { baseTagStyleList } from '../config/style';
import Tag from './Tag';

const StyledDiv = styled.div`
  background-color: white;
  padding-bottom: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  .title {
    width: 95vw;
    margin: 0 auto;
    font-size: 28px;
    font-weight: 700;
    padding: 14px 10px 10px;
    border-bottom: 1px solid #ddd;
  }
  .row:last-of-type > div:last-of-type {
    border-bottom: 0;
  }
  .row {
    padding: 10px 0 0 4vw;
    display: flex;
  }
  .category {
    img {
      width: 36px;
    }
    span {
      font-size: 13px;
      color: #7e7e7e;
      display: block;
      text-align: center;
    }
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
    width: ${({
      min,
      max,
      total,
    }: {
      min: number;
      max: number;
      total: number;
    }) => ((max + 1 - min) / total) * 100}%;
    height: 100%;
    top: 0;

    left: ${({ min, total }: { min: number; max: number; total: number }) =>
      (min / total) * 100}%;
    background-color: #ff306f;
  }
`;

interface IProps {
  abv: number;
  abvMin: number;
  abvMax: number;
  base: number;
  ingredients: string[];
  flavor: string;
}

const CocktailSummary = ({
  abv,
  abvMin,
  abvMax,
  base,
  ingredients,
  flavor,
}: IProps) => {
  return (
    <StyledDiv>
      <h2 className='title'>정보</h2>
      <div className='row'>
        <div className='category'>
          <img src='/beer.svg' alt='도수' />
          <span>도수</span>
        </div>
        <Content flexDirection={'column'}>
          <MeasuerList>
            <span>0</span>
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40+</span>
          </MeasuerList>
          <LineContainer min={abvMin} max={abvMax} total={40}>
            <div></div>
          </LineContainer>
        </Content>
      </div>
      <div className='row'>
        <div className='category'>
          <img src='/wheat.svg' alt='베이스' />
          <span>베이스</span>
        </div>
        <Content>
          <Tag
            name={baseTagStyleList[base].name}
            backgroundColor={baseTagStyleList[base].backgroundColor}
            fontSize={13}
          />
        </Content>
      </div>
      <div className='row'>
        <div className='category'>
          <img src='/chef.svg' alt='재료' />
          <span>재료</span>
        </div>
        <Content>
          {ingredients.map((name, i) => (
            <Tag key={i} name={name} fontSize={13} />
          ))}
        </Content>
      </div>
      <div className='row'>
        <div className='category'>
          <img src='/cutlery.svg' alt='맛' />
          <span>맛</span>
        </div>
        <Content>{flavor}</Content>
      </div>
    </StyledDiv>
  );
};

export default CocktailSummary;
