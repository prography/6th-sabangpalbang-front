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
  column: number;
  cardInfos: ICardInfo[];
  CardComponent: (props: any) => JSX.Element;
}

const getGridContainer = (column: number) => styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(${column}, 1fr);
  grid-auto-rows: minmax(400px, auto);
`;

const CardList = ({ column, cardInfos, CardComponent }: IProps) => {
  const CardContainer = getGridContainer(column);

  return (
    <CardContainer>
      {cardInfos.map((cardInfo) => (
        <CardComponent {...cardInfo} />
      ))}
    </CardContainer>
  );
};

export default CardList;
