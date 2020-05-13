import styled from 'styled-components';
import LeftArrow from '../res/LeftArrow';
import RightArrow from '../res/RightArrow';

const CardContainer = styled.div`
  display: flex;
  overflow: scroll;
`;
const RelativeDiv = styled.div`
  position: relative;
`;

const AbsoluteButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: calc(50% - 15px);
  ${(props: { direction: string }) =>
    props.direction === 'left'
      ? 'left:3px;'
      : props.direction === 'right'
      ? 'right:3px;'
      : ''}
  border: 1px solid #ededed;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  &:hover {
    background-color: #00a0c6;
    border: 1px solid black;
    cursor: pointer;
  }
`;

interface IImageInfo {
  src: string;
  alt: string;
}

interface ICardInfo {
  imageInfo: IImageInfo;
  cocktailID: number;
  alcoholDegree: number;
  cocktailName: string;
  ingredients: string[];
}

interface IProps {
  cardInfos: ICardInfo[];
  CardComponent: (props: any) => JSX.Element;
}

const CocktailRecommend = ({ cardInfos, CardComponent }: IProps) => {
  return (
    <RelativeDiv>
      <AbsoluteButton direction="left">
        <LeftArrow />
      </AbsoluteButton>
      <CardContainer>
        {cardInfos.map((cardInfo) => (
          <CardComponent key={cardInfo.cocktailID} {...cardInfo} />
        ))}
      </CardContainer>
      <AbsoluteButton direction="right">
        <RightArrow />
      </AbsoluteButton>
    </RelativeDiv>
  );
};

export default CocktailRecommend;
