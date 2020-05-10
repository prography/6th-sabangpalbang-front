import styled from 'styled-components';

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

const CardContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(200px, auto);

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardList = ({ cardInfos, CardComponent }: IProps) => {
  return (
    <CardContainer>
      {cardInfos.map((cardInfo) => (
        <CardComponent key={cardInfo.cocktailID} {...cardInfo} />
      ))}
    </CardContainer>
  );
};

export default CardList;
