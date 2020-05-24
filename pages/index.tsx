import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CocktailCardList from '../components/CocktailCardList';
import FilterTab from '../components/FilterTab';
import TopNavigation from '../components/TopNavigation';
import * as dummy from '../config/dummy';
import { RootState } from '../reducers';
import { bannerRequest } from '../reducers/carousel';
import { cocktailListRequest } from '../reducers/cocktail';

interface IProps {}

const IndexPage = () => {
  const dispatch = useDispatch();
  const { banner } = useSelector((state: RootState) => state.carousel);

  useEffect(() => {
    dispatch(bannerRequest());
    dispatch(cocktailListRequest('randomList'));
  }, []);

  return (
    <>
      <TopNavigation />
      <Carousel ItemComponent={Banner} infos={banner} />
      <FilterTab filters={dummy.filterTab} />
      <CocktailCardList />
    </>
  );
};

export default IndexPage;
