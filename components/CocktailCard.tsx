import Link from 'next/link';
import styled from 'styled-components';

interface IImageInfo {
  src: string;
  alt: string;
}

interface IProps {
  imageInfo: IImageInfo;
  cocktailID: number;
  alcoholDegree: number;
  cocktailName: string;
  ingredients: string[];
}

const StyledCard = styled.div``;
const InfoBlock = styled.div``;

const CocktailCard = ({
  imageInfo,
  cocktailID,
  alcoholDegree,
  cocktailName,
  ingredients,
}: IProps) => {
  return (
    <StyledCard>
      <Link
        href={{ pathname: '/cocktaildetail', query: { cocktailID } }}
        as={`/cocktaildetail/${cocktailID}`}
      >
        <a>
          <img src={imageInfo.src} alt={imageInfo.alt} />
          <InfoBlock>
            <p>{cocktailName}</p>
            <p>{ingredients}</p>
            <p className="alcohol-degree">{alcoholDegree}</p>
          </InfoBlock>
        </a>
      </Link>
    </StyledCard>
  );
};

export default CocktailCard;
