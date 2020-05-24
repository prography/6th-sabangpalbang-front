import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CocktailCard from '../components/CocktailCard';
import CocktailCardList from '../components/CocktailCardList';
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
      <CocktailCardList
        CocktailCardComponent={CocktailCard}
        cocktailInfos={dummy.mainCocktailListInfo}
      />
    </>
  );
};

export default IndexPage;
