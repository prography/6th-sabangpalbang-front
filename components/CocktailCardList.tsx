import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../config/style';
import CocktailCard from './CocktailCard';

const CardListContainer = styled.div`
  background: #fff;

  .option_container {
    padding: 20px 22px 10px;

    .option_item {
      float: left;
      font-weight: bold;
      color: ${({ secondTextColor }: ITheme) => secondTextColor};

      &.active {
        color: ${({ themeColor }: ITheme) => themeColor};
      }
    }
    .option_item + .option_item {
      margin-left: 10px;
    }
    .more_link {
      float: right;
      color: ${({ secondTextColor }: ITheme) => secondTextColor};
    }
  }

  .option_container::after {
    content: '';
    display: block;
    clear: both;
  }

  @media (min-width: 810px) {
    .option_container {
      padding: 20px 50px 10px;
    }
    .option_item {
      font-size: 24px;
    }
  }
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 15px;
`;

interface IProps {
  cocktailInfos: {
    src: string;
    alt: string;
    href: string;
    name: string;
    tags?: {
      text: string;
      href: string;
      textColor?: string;
      backgroundColor?: string;
    }[];
    favorite?: boolean;
  }[];
}
const CocktailCardList = ({ cocktailInfos }: IProps) => {
  const theme = useTheme() as ITheme;

  return (
    <CardListContainer {...theme}>
      <div className='option_container'>
        <span className='option_item active'>#랜덤순</span>
        <span className='option_item'>#이름순</span>
        <span className='option_item'>#인기순</span>
        <Link href='/list'>
          <a className='more_link'>더보기</a>
        </Link>
      </div>

      <CardList>
        {cocktailInfos.map((info, i) => (
          <CocktailCard key={i} {...info} />
          // key에 index아닌 id가 필요
        ))}
      </CardList>
    </CardListContainer>
  );
};
export default CocktailCardList;
