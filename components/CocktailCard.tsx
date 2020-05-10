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

const StyledCard = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
`;
const InfoBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 2.5em 1em;
  box-sizing: border-box;
  & > p {
    font-weight: bold;
  }

  .cocktail-name {
    font-size: 1.3rem;
  }

  .ingredients {
    color: gray;
    margin-top: 1em;
    font-size: 1.1rem;
  }
  .alcohol-degree {
    position: absolute;
    right: 0;
    top: 0.3em;
    font-size: 1.5rem;
    text-align: right;
    color: #ce89f8;
  }
`;

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
            <p className="cocktail-name">{cocktailName}</p>
            <p className="ingredients">{ingredients.join(', ')}</p>
            <p className="alcohol-degree">{alcoholDegree.toFixed(1)}도</p>
          </InfoBlock>
        </a>
      </Link>
    </StyledCard>
  );
};

export default CocktailCard;
