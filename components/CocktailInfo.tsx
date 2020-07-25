import styled from 'styled-components';
import Tag from './Tag';

const StyledDiv = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  .bg {
    position: relative;
  }
  .bg_img {
    width: 100%;
  }
  .cocktail-img {
    z-index:20;
    position: absolute;
    top: calc(28vw + 40px);
    left: 4vw;
    width: 31vw;
    height: 48vw;
    background: white;
    border-radius: 5%;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
  }
  .cocktail-info {
    padding-left: 40vw;
    min-height: 31vw;
    padding-top: 5vw;
    .cocktail-name {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 3px;
    }
    .favorite-count {
      font-size: 14px;
      font-weight: 300;
    }
    .tags {
      margin-top: 5px;
    }
  }
  .description {
    width: 95vw;
    margin: 0 auto;
    margin-top: 10px;
    padding: 15px;
    border-top: 1px solid #ddd;
    font-size: 14px;
  }
  .like_btn {
    position: absolute;
    right: 13px;
    top: 13px;
    width: 23px;
    height: 24px;
    background: url(/star_fill.png);
    background-size: 23px 24px;
  }
  @media screen and (min-width: 768px) {
    .background-img {
      height:20vw;
    }
    .cocktail-img {
      top:20vw;
      width: 25vw;
      height:38vw;
    }
    .cocktail-info {
      padding-left:32vw;
    }
  }
`;

interface IImageInfo {
  src: string;
  alt: string;
}

interface IProps {
  cocktailImg: IImageInfo;
  cocktailName: string;
  favoriteCount: number | string;
  description: string;
  tags?: {
    name: string;
    idx: number;
    textColor: string;
  }[];
}

const CocktailInfo = ({
  cocktailImg,
  cocktailName,
  favoriteCount,
  description,
  tags,
}: IProps) => {
  return (
    <StyledDiv>
      <div className="bg">
        <img
          className='bg_img'
          src="/cocktail_bg.jpg"
          alt=""
        />
      </div>
      <img
        className='cocktail-img'
        src={cocktailImg.src}
        alt={cocktailImg.alt}
      />
      <div className='cocktail-info'>
        <h3 className='cocktail-name'>{cocktailName}</h3>
        <span className='favorite-count'>{favoriteCount} likes</span>
        <div className='tags'>
          {tags?.map((tag) => (
            <Tag key={tag.idx} name={tag.name} fontSize={12} />
          ))}
        </div>
      </div>
      <div className='description'>{description}</div>
      <button type="button" className="like_btn" />
    </StyledDiv>
  );
};

export default CocktailInfo;
