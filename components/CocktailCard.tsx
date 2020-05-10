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
    height: 150px;
  }
  @media screen and (min-width: 520px) {
    img {
      height: 220px;
    }
  }

  @media screen and (min-width: 769px) {
    img {
      height: 300px;
    }
  }
`;
const InfoBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 0.7em 0.6em;
  box-sizing: border-box;
  & > p {
    font-weight: bold;
  }

  .cocktail-name {
    font-size: 0.9rem;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ingredients {
    color: gray;
    margin-top: 1em;
    font-size: 0.8rem;
    line-height: 1.3rem;
    word-break: keep-all;
  }
  .alcohol-degree {
    position: absolute;
    right: 0;
    top: 0.7em;
    font-size: 0.8rem;
    text-align: right;
    color: #fc6593;
  }

  @media screen and (min-width: 520px) {
    .cocktail-name {
      font-size: 1.1rem;
    }
    .ingredients {
      font-size: 1rem;
    }
    .alcohol-degree {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 769px) {
    .cocktail-name {
      font-size: 1.3rem;
    }
    .ingredients {
      font-size: 1.2rem;
    }
    .alcohol-degree {
      font-size: 1.2rem;
    }
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
            <p className="alcohol-degree">{alcoholDegree.toFixed(1)}%</p>
          </InfoBlock>
        </a>
      </Link>
    </StyledCard>
  );
};

export default CocktailCard;
