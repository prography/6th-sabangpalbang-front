import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CocktailCardList from '../components/CocktailCardList';
import FilterTab from '../components/FilterTab';
import TopNavigation from '../components/TopNavigation';
import * as dummy from '../config/dummy';
import { RootState } from '../reducers';
import { bannerRequest } from '../reducers/carousel';

interface IProps {}

const IndexPage = () => {
  const dispatch = useDispatch();
  const { banner } = useSelector((state: RootState) => state.carousel);
  const { loading } = useSelector((state: RootState) => state.cocktail);

  useEffect(() => {
    dispatch(bannerRequest());
  }, []);

  return (
<<<<<<< HEAD
    <>
      <TopNavigation />
      <Carousel ItemComponent={Banner} infos={banner} loading={!banner} />
      <FilterTab filters={dummy.filterTab} />
      <CocktailCardList />
    </>
=======
    <div>
      <HeaderBox page={0} />
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
>>>>>>> master
  );
};

export default IndexPage;
