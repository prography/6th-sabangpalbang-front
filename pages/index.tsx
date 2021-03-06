import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';
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
import { cocktailListRequest, removeOffset } from '../src/reducers/cocktail';
import { POPULAR_LIST, NAME_LIST, ALCOHOL_LIST } from '../config/constants';

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
  
  const { alcoholList, nameList, popularList, loading, offset, isOffsetEnd } = useSelector(
    (state: RootState) => state.cocktail
  );
  const [orderOption, setOrderOption] = useState<keyof ICocktailList>(NAME_LIST);
	const cocktailList = { alcoholList, nameList, popularList } as ICocktailList;

	const isScrollEnd = useCallback(() => (
			!isOffsetEnd && 
			document.documentElement.scrollTop + document.documentElement.clientHeight + 400 >= document.documentElement.scrollHeight &&
			!loading 
		), [isOffsetEnd, loading]);
	
	useEffect(() => {
		!cocktailList[orderOption] && dispatch(cocktailListRequest(orderOption, offset[orderOption]));
	}, []);

  useEffect(() => {
    const infiniteScroll = fromEvent(window, 'scroll')
      .pipe(
        throttleTime(100),
        filter(isScrollEnd)
      )
			.subscribe((_) => dispatch(cocktailListRequest(orderOption, offset[orderOption])));
			
    return () => {
      infiniteScroll.unsubscribe();
    };
  }, [orderOption, loading, offset[orderOption]]);


  
  const optionHandler = useCallback(
    (optionName: keyof ICocktailList) => () => {
      if(optionName === POPULAR_LIST) return alert('아직 준비 중이지렁');
      setOrderOption(optionName);
      dispatch(removeOffset(optionName));
      if (cocktailList[optionName] === null) {
        dispatch(cocktailListRequest(optionName, offset[optionName]));
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
          <button className={`order_btn ${orderOption === NAME_LIST ? 'active' : ''}`}
            onClick={optionHandler(NAME_LIST)}>
            #이름순
          </button>
          <button className={`order_btn ${orderOption === ALCOHOL_LIST ? 'active' : ''}`}
            onClick={optionHandler(ALCOHOL_LIST)}>
            #도수순
          </button>
          <button className={`order_btn ${orderOption === POPULAR_LIST ? 'active' : ''}`}
            onClick={optionHandler(POPULAR_LIST)}>
            #인기순
          </button>
        </div>
      </ListOptionWrapper>
      <CocktailCardList cocktailList={cocktailList[orderOption]} loading={loading || !cocktailList[orderOption]} />
    </>
  );
};

export default IndexPage;
