import styled, { ThemeConsumer } from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.div`
  background-color: white;
  & > img:first-of-type {
    width: 100vw;
    height: 50vw;
  }
  & > img:last-of-type {
    position: absolute;
    top: 25vw;
    left: 10vw;
    width: 30vw;
    height: 48vw;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;

const InfoDiv = styled.div`
  padding-left: calc(40vw + 15px);
  padding-top: 10px;
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 3px;
  }
  & > span {
    font-size: 14px;
    font-weight: 300;
  }
`;

interface IImageInfo {
  src: string;
  alt: string;
}

interface IProps {
  backgroundImg: IImageInfo;
  cocktailImg: IImageInfo;
  cocktailName: string;
  favoriteCount: number | string;
  description: string;
  tags?: {
    text: string;
    href: string;
    textColor?: string;
    backgroundColor?: string;
  }[];
}

const CocktailInfo = ({
  backgroundImg,
  cocktailImg,
  cocktailName,
  favoriteCount,
  description,
  tags,
}: IProps) => {
  return (
    <StyledDiv>
      <img src={backgroundImg.src} alt={backgroundImg.alt} />
      <img src={cocktailImg.src} alt={cocktailImg.alt} />
      <InfoDiv>
        <h3>{cocktailName}</h3>
        <span>{favoriteCount} likes</span>
        <div>
          {tags?.map((tag, i) => (
            <div key={i}>{tag.text}</div>
          ))}
        </div>
      </InfoDiv>
      <div>개발자 한마디:{description}</div>
    </StyledDiv>
  );
};

export default CocktailInfo;
