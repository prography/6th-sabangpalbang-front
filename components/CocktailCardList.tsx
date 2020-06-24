import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';
import { filter, skip, throttleTime } from 'rxjs/operators';
import styled from 'styled-components';

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

const CardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #fff;
`;

const CocktailCardList = ({ orderOption } : { orderOption: keyof ICocktailList}) => {
  const dispatch = useDispatch();
  const { randomList, nameList, popularList, loading } = useSelector(
    (state: RootState) => state.cocktail
  );
  const cocktailList = {
    randomList,
    nameList,
    popularList,
  } as ICocktailList;

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
    <CardList>
      {cocktailList[orderOption] &&
        cocktailList[orderOption]!.map((info) => (
          <CocktailCard key={info.idx} info={info} />
        ))}
    </CardList>
  );
};
export default WithLoading(CocktailCardList);
