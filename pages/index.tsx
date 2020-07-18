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
  .order_btns {
    padding: 20px 20px 0px;

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .order_btn {
    float: left;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: ${({ secondTextColor }: ITheme) => secondTextColor};
    cursor: pointer;

    &.active {
      color: ${({ themeColor }: ITheme) => themeColor};
    }
  }
  .order_btn + .order_btn {
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    .order_btns {
      max-width: 968px;
      margin: 0 auto;
      padding: 20px 50px 10px;
    }

    .order_btn {
      font-size: 24px;
    }
  }
`;

const IndexPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme() as ITheme;
  
  const { alcoholList, nameList, popularList, loading } = useSelector(
    (state: RootState) => state.cocktail
  );
  const [orderOption, setOrderOption] = useState<keyof ICocktailList>(
    'nameList'
  );
  const cocktailList = {
    alcoholList,
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
        <div className="order_btns">
          <button className={`order_btn ${orderOption === 'nameList' ? 'active' : ''}`}
            onClick={optionHandler('nameList')}>
            #이름순
          </button>
          <button className={`order_btn ${orderOption === 'alcoholList' ? 'active' : ''}`}
            onClick={optionHandler('alcoholList')}>
            #도수순
          </button>
          <button className={`order_btn ${orderOption === 'popularList' ? 'active' : ''}`}
            onClick={optionHandler('popularList')}>
            #인기순
          </button>
        </div>
      </ListOptionWrapper>
      <CocktailCardList cocktailList={cocktailList[orderOption]} loading={loading || !cocktailList[orderOption]} />
    </>
  );
};

export default IndexPage;
