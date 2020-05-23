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
        cocktailInfos={[
          {
            src:
              'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
            alt: '',
            href: '',
            name: '블루 하와이',
            tags: [
              { text: '럼', backgroundColor: '#7CB587', href: '' },
              { text: '10~15%', backgroundColor: '#7CA1B5', href: '' },
            ],
          },
          {
            src:
              'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
            alt: '',
            href: '',
            name: '블루 하와이',
            tags: [
              { text: '럼', backgroundColor: '#7CB587', href: '' },
              { text: '10~15%', backgroundColor: '#7CA1B5', href: '' },
            ],
          },
          {
            src:
              'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
            alt: '',
            href: '',
            name: '블루 하와이',
            tags: [
              { text: '럼', backgroundColor: '#7CB587', href: '' },
              { text: '10~15%', backgroundColor: '#7CA1B5', href: '' },
            ],
          },
          {
            src:
              'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
            alt: '',
            href: '',
            name: '블루 하와이',
            tags: [
              { text: '럼', backgroundColor: '#7CB587', href: '' },
              { text: '10~15%', backgroundColor: '#7CA1B5', href: '' },
            ],
          },
          {
            src:
              'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
            alt: '',
            href: '',
            name: '블루 하와이',
            tags: [
              { text: '럼', backgroundColor: '#7CB587', href: '' },
              { text: '10~15%', backgroundColor: '#7CA1B5', href: '' },
            ],
          },
          {
            src:
              'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
            alt: '',
            href: '',
            name: '블루 하와이',
            tags: [
              { text: '럼', backgroundColor: '#7CB587', href: '' },
              { text: '10~15%', backgroundColor: '#7CA1B5', href: '' },
            ],
          },
        ]}
      />
    </>
  );
};

export default IndexPage;
