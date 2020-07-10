import Link from 'next/link';
import styled from 'styled-components';

import { ICocktail } from '../src/interfaces/cocktail';
import Tag from './Tag';

interface IProps {
  info: ICocktail;
  tag: boolean;
  number: boolean;
  order: number;
}

const CardContainer = styled.li`
  overflow: hidden;
  margin: 14px 0;
  padding-bottom: 8px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

  .image_link {
    display: block;
    width: 140px;
  }
  .image_wrapper {
    position: relative;
    vertical-align: top;
    width: 100%;
    height: 175px;
    border-radius: 5px;
  }
  .cocktail_image {
    width: 100%;
    height: 100%;
  }
  .order_number {
    position: absolute;
    top: 0;
    left: 0;
    padding: 6px 8px;
    border-bottom-right-radius: 4px;
    background-color: #fc834e;
    font-size: 14px;
    color: #fff;
  }

  .cocktail_name {
    display: block;
    margin: 8px 0;
    padding: 0 12px;
    font-size: 14px;
    line-height: 20px;
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

  @media (min-width: 768px) {
    padding-bottom: 10px;
    
    .image_link {
      width: 200px;
    }
    .image_wrapper {
      height: 250px;
    }
    .cocktail_name {
      margin-top: 12px;
      padding: 0 16px;
      font-size: 22px;
      line-height: 28px;
    }
    .order_number {
      padding: 8px 10px;
      font-size: 18px;
    }
    .tag {
      font-size: 20px;
      line-height: 24px;
      padding: 4px 12px;
    }
  }
`;

const CocktailCard = ({ info, tag, number, order }: IProps) => {
  return (
    <CardContainer>
      <Link
        href={{ pathname: '/detail', query: { id: info.idx } }}
        as={`/detail/${info.idx}`}
      >
        <a className='image_link'>
          <div className="image_wrapper">
            <img className='cocktail_image' src={info.imgUrl} alt='' />
            {number && <span className="order_number">{order}</span>}
          </div>
          <strong className='cocktail_name'>{info.name}</strong>
        </a>
      </Link>

      {tag && <div className='tag_list'>
        {info.tags?.map((tag) => (
          <Tag key={tag.idx} href='#' name={tag.name} fontSize={12} />
        ))}
      </div>}
    </CardContainer>
  );
};

export default CocktailCard;
