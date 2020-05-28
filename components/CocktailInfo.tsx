import styled from 'styled-components';
import Tag from './Tag';

const StyledDiv = styled.div`
  background-color: white;
  & > img:first-of-type {
    width: 100vw;
    height: 47vw;
    filter: blur(1px);
  }
  & > img:last-of-type {
    position: absolute;
    top: 28vw;
    left: 4vw;
    width: 31vw;
    height: 48vw;
    background: white;
    border-radius: 5%;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
  }
`;

const InfoDiv = styled.div`
  padding-left: 40vw;
  min-height: 31vw;
  padding-top: 5vw;
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

const Tags = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Description = styled.div`
  margin: 10px auto;
  padding: 15px;
  border-top: 1px solid #e4e4e4;
  font-size: 14px;
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
        <Tags>
          {tags?.map((tag, i) => (
            <Tag
              text={tag.text}
              href={tag.href}
              textColor={tag.textColor}
              backgroundColor={tag.backgroundColor}
              fontSize={12}
            />
          ))}
        </Tags>
      </InfoDiv>
      <Description>
        <b>개발자 한마디 : </b>
        {description}
      </Description>
    </StyledDiv>
  );
};

export default CocktailInfo;
