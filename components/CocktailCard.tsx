import Link from 'next/link';
import styled from 'styled-components';

import { ICocktail } from '../src/interfaces/cocktail';

const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  width: 160px;
  margin: 20px 0;

  .image_link {
    display: block;
  }
  .cocktail_image_container {
    width: 160px;
    height: 220px;
  }
  .cocktail_image {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .cocktail_name {
    display: block;
    margin: 8px 0;
    padding: 0 12px;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .tag_list {
    padding: 0 12px 12px;
  }

  .tag {
    display: inline-block;
    margin: 2px 2px;
    padding: 6px 8px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
  }

  @media (min-width: 810px) {
    width: 250px;

    .cocktail_name {
      font-size: 25px;
      line-height: 30px;
    }
    .tag {
      font-size: 20px;
      line-height: 24px;
      padding: 4px 12px;
    }
  }
`;

interface IProps {
  info: ICocktail;
}

const CocktailCard = ({ info }: IProps) => {
  return (
    <CardContainer>
      <Link
        href={{ pathname: '/detail', query: { id: info.idx } }}
        as={`/detail/${info.idx}`}
      >
        <a className='image_link'>
          <div className='cocktail_image_container'>
            <img className='cocktail_image' src={info.imgUrl} alt='' />
          </div>
          <strong className='cocktail_name'>{info.name}</strong>
        </a>
      </Link>

      <div className='tag_list'>
        {info.tags?.map((tag, i) => (
          <Link href='#' key={tag.idx}>
            <a className='tag' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
              {tag.name}
            </a>
          </Link>
        ))}
      </div>
    </CardContainer>
  );
};

export default CocktailCard;
