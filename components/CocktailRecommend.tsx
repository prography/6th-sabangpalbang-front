import styled from 'styled-components';
import Link from 'next/link';
import CocktailCard from './CocktailCard';

const CardContainer = styled.div`
  display: flex;
  position: relative;
  overflow: scroll;
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
    <CardContainer>
      {cardInfos.map((cardInfo) => (
        <CardComponent key={cardInfo.cocktailID} {...cardInfo} />
      ))}
    </CardContainer>
  );
};

export default CocktailRecommend;
