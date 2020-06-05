import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';
import { filter, skip, throttleTime } from 'rxjs/operators';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../config/style';
import { ICocktail } from '../src/interfaces/cocktail';
import { RootState } from '../src/reducers';
import { cocktailListRequest } from '../src/reducers/cocktail';
import CocktailCard from './CocktailCard';
import WithLoading from './WithLoading';

interface ICocktailList {
  randomList: null | ICocktail[];
  nameList: null | ICocktail[];
  popularList: null | ICocktail[];
}

const CardListContainer = styled.div`
  background: #fff;

  .option_container {
    padding: 20px 22px 0px;

    .option_item {
      float: left;
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: ${({ secondTextColor }: ITheme) => secondTextColor};

      &.active {
        color: ${({ themeColor }: ITheme) => themeColor};
      }
    }
    .option_item + .option_item {
      margin-left: 10px;
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
  padding: 0 10px;
`;

const CardListWithLoading = WithLoading(200)(
  ({ cocktailList }: { cocktailList: ICocktail[] }) => {
    return (
      <CardList>
        {cocktailList &&
          cocktailList!.map((info) => (
            <CocktailCard key={info.idx} info={info} />
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
    'nameList'
  );
  const optionHandler = useCallback(
    (optionName: keyof ICocktailList) => () => {
      if (optionName !== 'nameList') {
        alert('아직 준비중이지렁');
        return;
      }
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
        throttleTime(500),
        skip(1),
        filter(
          (_) =>
            document.documentElement.scrollTop +
              document.documentElement.clientHeight +
              600 >=
              document.documentElement.scrollHeight && !loading
        )
      )
      .subscribe((_) => dispatch(cocktailListRequest(orderOption)));
    return () => {
      infiniteScroll.unsubscribe();
    };
  }, [orderOption, loading]);

  useEffect(() => {
    !cocktailList[orderOption] && dispatch(cocktailListRequest(orderOption));
  }, []);

  return (
    <CardListContainer {...theme}>
      <div className='option_container'>
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
            orderOption === 'randomList' ? 'active' : ''
          }`}
          onClick={optionHandler('randomList')}
        >
          #랜덤순
        </span>
        <span
          className={`option_item ${
            orderOption === 'popularList' ? 'active' : ''
          }`}
          onClick={optionHandler('popularList')}
        >
          #인기순
        </span>
      </div>
      <CardListWithLoading
        cocktailList={cocktailList[orderOption]}
        loading={loading || !cocktailList[orderOption]}
      />
    </CardListContainer>
  );
};
export default CocktailCardList;
