import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CocktailCard from '../components/CocktailCard';
import CocktailGrid from '../components/CocktailGrid';
import FilterTab from '../components/FilterTab';
import TopNavigation from '../components/TopNavigation';
import * as dummy from '../config/dummy';

interface IProps {}

const IndexPage = (props: IProps) => {
  return (
    <>
      <TopNavigation />
      <Carousel ItemComponent={Banner} Infos={dummy.banner} />
      <FilterTab filters={dummy.filterTab} />
      <CocktailGrid
        CocktailCardComponent={CocktailCard}
        cocktailInfos={dummy.mainCocktailListInfo}
      />
    </>
  );
};

export default IndexPage;
