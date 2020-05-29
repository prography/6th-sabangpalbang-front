import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';
import { filter, skip, throttleTime } from 'rxjs/operators';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../config/style';
import { RootState } from '../reducers';
import { cocktailListRequest, ICocktailInfo } from '../reducers/cocktail';
import CocktailCard from './CocktailCard';
import WithLoading from './WithLoading';

interface ICocktailList {
  randomList: null | ICocktailInfo[];
  nameList: null | ICocktailInfo[];
  popularList: null | ICocktailInfo[];
}

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

const CardListWithLoading = WithLoading(200)(
  ({ cocktailList }: { cocktailList: ICocktailInfo[] }) => {
    return (
      <CardList>
        {cocktailList &&
          cocktailList!.map((info: any, i) => (
            <CocktailCard key={i} {...info} />
            // key에 index아닌 id가 필요
          ))}
      </CardList>
    );
  }
);

const CocktailCardList = () => {
  const dispatch = useDispatch();
  const { randomList, nameList, popularList, loading } = useSelector(
    (state: RootState) => state.cocktail
  );
  const cocktailList = {
    randomList,
    nameList,
    popularList,
  } as ICocktailList;

  const theme = useTheme() as ITheme;
  const [orderOption, setOrderOption] = useState<keyof ICocktailList>(
    'randomList'
  );
  const optionHandler = useCallback(
    (optionName: keyof ICocktailList) => () => {
      setOrderOption(optionName);
      if (cocktailList[optionName] === null) {
        dispatch(cocktailListRequest(optionName));
      }
    },
    [cocktailList]
  );

  useEffect(() => {
    const infiniteScroll = fromEvent(window, 'scroll')
      .pipe(
        skip(1),
        throttleTime(500),
        filter(
          (_) =>
            document.documentElement.scrollTop +
              document.documentElement.clientHeight +
              600 >=
              document.documentElement.scrollHeight && !loading
        )
      )
      .subscribe((_) => dispatch(cocktailListRequest(orderOption)));
    !cocktailList[orderOption] && dispatch(cocktailListRequest(orderOption));
    return () => {
      infiniteScroll.unsubscribe();
    };
  }, [orderOption, loading]);

  return (
    <CardListContainer {...theme}>
      <div className='option_container'>
        <span
          className={`option_item ${
            orderOption === 'randomList' ? 'active' : ''
          }`}
          onClick={optionHandler('randomList')}
        >
          #랜덤순
        </span>
        <span
          className={`option_item ${
            orderOption === 'nameList' ? 'active' : ''
          }`}
          onClick={optionHandler('nameList')}
        >
          #이름순
        </span>
        <span
          className={`option_item ${
            orderOption === 'popularList' ? 'active' : ''
          }`}
          onClick={optionHandler('popularList')}
        >
          #인기순
        </span>
        <Link href='/list'>
          <a className='more_link'>더보기</a>
        </Link>
      </div>
      <CardListWithLoading
        cocktailList={cocktailList[orderOption]}
        loading={loading || !cocktailList[orderOption]}
      />
    </CardListContainer>
  );
};
export default CocktailCardList;
