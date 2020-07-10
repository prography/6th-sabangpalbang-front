import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';
import { filter, skip, throttleTime } from 'rxjs/operators';
import styled, { useTheme } from 'styled-components';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CocktailCardList from '../components/CocktailCardList';
import FilterTab from '../components/FilterTab';
import TopNavigation from '../components/TopNavigation';
import * as dummy from '../config/dummy';
import { ITheme } from '../config/style';
import { ICocktailList } from '../src/interfaces/cocktailList';
import { RootState } from '../src/reducers';
import { cocktailListRequest } from '../src/reducers/cocktail';

const ListOptionWrapper = styled.div`
  background: #fff;
  .list_option {
    padding: 20px 20px 0px;

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
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

  @media (min-width: 768px) {
    .list_option {
      max-width: 968px;
      margin: 0 auto;
      padding: 20px 50px 10px;
    }

    .option_item {
      font-size: 24px;
    }
  }
`;

const IndexPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme() as ITheme;
  
  const { randomList, nameList, popularList, loading } = useSelector(
    (state: RootState) => state.cocktail
  );
  const [orderOption, setOrderOption] = useState<keyof ICocktailList>(
    'nameList'
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
  return (
    <>
      <TopNavigation />
      <Carousel ItemComponent={Banner} infos={dummy.banner} />
      <FilterTab filters={dummy.filterTab} />
      <ListOptionWrapper {...theme}>
        <ul className="list_option">
          <li className={`option_item ${orderOption === 'randomList' ? 'active' : ''}`}
            onClick={optionHandler('randomList')}>
            #랜덤순
          </li>
          <li className={`option_item ${orderOption === 'nameList' ? 'active' : ''}`}
            onClick={optionHandler('nameList')}>
            #이름순
          </li>
          <li className={`option_item ${orderOption === 'popularList' ? 'active' : ''}`}
            onClick={optionHandler('popularList')}>
            #인기순
          </li>
        </ul>
      </ListOptionWrapper>
      <CocktailCardList cocktailList={cocktailList[orderOption]} loading={loading || !cocktailList[orderOption]} />
    </>
  );
};

export default IndexPage;
