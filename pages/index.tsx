import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CocktailCardList from '../components/CocktailCardList';
import FilterTab from '../components/FilterTab';
import TopNavigation from '../components/TopNavigation';
import * as dummy from '../config/dummy';

interface IProps {}

const IndexPage = () => {
  return (
    <>
      <TopNavigation />
      <Carousel ItemComponent={Banner} Infos={dummy.banner} />
      <FilterTab filters={dummy.filterTab} />
      <CocktailCardList cocktailInfos={dummy.mainCocktailListInfo} />
    </>
  );
};

export default IndexPage;
