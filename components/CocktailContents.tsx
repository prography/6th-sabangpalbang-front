import styled from 'styled-components';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-areas:
    'img info'
    'des des';
  @media screen and (min-width: 768px) {
    grid-template-areas:
      'img info'
      'img des';
  }
`;

const CocktailImg = styled.img`
  width: 100%;
  grid-area: img;
`;
const Info = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div:nth-child(1) {
    font-size: 1.6em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > div:nth-child(2) {
    margin-bottom: 0.8em;
  }
`;
const Description = styled.div`
  grid-area: des;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  padding: 2px 4px;
  border: 1px solid #9f9f9f;
  border-radius: 6px;
  margin: 3px;
  font-size: 0.7em;
  ${(props: { backgroundColor?: string; textColor?: string }) =>
    (props.backgroundColor
      ? `background-color:${props.backgroundColor};`
      : '') + (props.textColor ? `color:${props.textColor};` : '')}
`;

interface IImageInfo {
  src: string;
  alt: string;
}
interface ITag {
  tag: string;
  backgroundColor?: string;
  textColor?: string;
}

interface IProps {
  imageInfo: IImageInfo;
  cocktailID: number;
  alcoholDegree: number;
  cocktailName: string;
  ingredients: string[];
  tags: ITag[];
  description: string;
}

const CocktailContents = ({
  imageInfo,
  cocktailID,
  alcoholDegree,
  cocktailName,
  ingredients,
  tags,
  description,
}: IProps) => {
  return (
    <GridDiv>
      <CocktailImg alt={imageInfo.alt} src={imageInfo.src} />
      <Info>
        <div>{cocktailName}</div>
        <TagList>
          {tags.map((tag, i) => (
            <Tag
              key={i}
              backgroundColor={tag.backgroundColor}
              textColor={tag.textColor}
            >
              {tag.tag}
            </Tag>
          ))}
        </TagList>
        <div>
          <div>도수🤮: {alcoholDegree}%</div>
          <div>
            재료🍹:
            {ingredients.map((ingredient, i) => (
              <span key={i}>{ingredient} </span>
            ))}
          </div>
          <div>정보🤪: 아무말</div>
        </div>
      </Info>
      <Description>{description}</Description>
    </GridDiv>
  );
};

export default CocktailContents;
