import HeaderBox from '../components/HeaderBox';
import BannerCarousel from '../components/BannerCarousel';
import Banner from '../components/Banner';
import FilterTab from '../components/FilterTab';
import CocktailCard from '../components/CocktailCard';
import CocktailGrid from '../components/CocktailGrid';

interface IProps {}

const IndexPage = (props: IProps) => {
  return (
    <div>
      <HeaderBox display={'flex'} page={0} />
      <div style={{ paddingTop: '88px' }}>
        <BannerCarousel
          BannerComponent={Banner}
          BannerInfos={[
            { src: 'banner_temp.jpeg', alt: '', href: '' },
            { src: 'banner_temp2.jpg', alt: '', href: '' },
            { src: 'banner_temp3.jpeg', alt: '', href: '' },
          ]}
        />
        <FilterTab
          filters={[
            {
              category: '베이스',
              filterList: [
                {
                  href: '',
                  filterName: '위스키',
                  filterImage: { src: '위스키.png', alt: '' },
                },
                {
                  href: '',
                  filterName: '럼',
                  filterImage: { src: '럼.jpg', alt: '' },
                },
                {
                  href: '',
                  filterName: '진',
                  filterImage: { src: '진.jpeg', alt: '' },
                },
              ],
            },
            {
              category: '도수',
              filterList: [
                {
                  href: '',
                  filterName: '무알콜',
                  filterImage: { src: '위스키.png', alt: '' },
                },
                {
                  href: '',
                  filterName: '0~20%',
                  filterImage: { src: '럼.jpg', alt: '' },
                },
                {
                  href: '',
                  filterName: '20~40%',
                  filterImage: { src: '진.jpeg', alt: '' },
                },
              ],
            },
            {
              category: '태그',
              filterList: [
                {
                  href: '',
                  filterName: '19',
                  filterImage: { src: '위스키.png', alt: '' },
                },
                {
                  href: '',
                  filterName: '바나나',
                  filterImage: { src: '럼.jpg', alt: '' },
                },
                {
                  href: '',
                  filterName: '복숭아',
                  filterImage: { src: '진.jpeg', alt: '' },
                },
              ],
            },
          ]}
        />
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
      </div>
    </div>
  );
};

export default IndexPage;
