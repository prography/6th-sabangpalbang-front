import { useRouter } from 'next/router';
import styled from 'styled-components';
import CocktailContents from '../components/CocktailContents';
import CocktailRecommend from '../components/CocktailRecommend';
import CocktailCard from '../components/CocktailCard';

const DummyBar = styled.div`
  width: 100%;
  height: ${(props: { height: string }) =>
    props.height ? props.height : '20px'};
  background-color: #efefef;
`;
const dummyData = {
  imageInfo: {
    alt: 'Blue Hawaii',
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
  },
  cocktailID: 1213,
  alcoholDegree: 30,
  cocktailName: 'Blue Hawaii',
  ingredients: ['Rum', 'Pineapple', 'Curaçao'],
  tags: [
    { tag: '30~40%' },
    { tag: 'Rum' },
    { tag: 'Blue', backgroundColor: '#0984e3', textColor: 'white' },
    { tag: 'Tropical', backgroundColor: '#34e7e4' },
  ],
  description:
    '맛은 아주 미묘해서 무슨 맛이냐고 물으면 그냥 블루 하와이맛이라고 할 수 밖에 없다고 한다. 겨우겨우 비슷한 맛을 꼽으라면 파워에이드 마운틴블라스트, 폴라포 스포츠 맛 정도. 럼 베이스. 셰이커에 럼 30 ml, 블루 큐라소 15 ml, 파인애플 주스 30 ml, 라임주스 10 ml, 얼음 2컵을 넣고 가볍게 흔들어 잘게 부순 얼음을 넣은 8온스 필스너 (240ml) 잔에 따르고 파인애플 스틱, 체리, 스트로 등으로 장식한다. 흔들기(Shake) 기법 사용.',
};

const dummyList = [
  {
    imageInfo: {
      alt: 'Blue Kamikaze',
      src:
        'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_kamikaze-1.png',
    },
    cocktailID: 1,
    alcoholDegree: 15,
    cocktailName: 'Blue Kamikaze',
    ingredients: [],
  },
  {
    imageInfo: {
      alt: 'Blue Margarita',
      src:
        'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_margarita-1.png',
    },
    cocktailID: 2,
    alcoholDegree: 25,
    cocktailName: 'Blue Margarita',
    ingredients: [],
  },
  {
    imageInfo: {
      alt: 'Bluberry Martini',
      src:
        'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blueberry_martini-1.png',
    },
    cocktailID: 3,
    alcoholDegree: 20,
    cocktailName: 'Bluberry Martini',
    ingredients: [],
  },
  {
    imageInfo: {
      alt: 'Tropical Dream',
      src:
        'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_dream-1.png',
    },
    cocktailID: 4,
    alcoholDegree: 10,
    cocktailName: 'Tropical Dream',
    ingredients: [],
  },
  {
    imageInfo: {
      alt: 'Tropical Strawberry',
      src:
        'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png',
    },
    cocktailID: 5,
    alcoholDegree: 0,
    cocktailName: 'Tropical Strawberry',
    ingredients: [],
  },
  {
    imageInfo: {
      alt: 'Rum Fizz',
      src:
        'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_rum_fizz-1.png',
    },
    cocktailID: 6,
    alcoholDegree: 10,
    cocktailName: 'Rum Fizz',
    ingredients: [],
  },
];

const Contents = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

const DetailPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <DummyBar height="80px" />
      <Contents>
        <CocktailContents {...dummyData} />
        <CocktailRecommend CardComponent={CocktailCard} cardInfos={dummyList} />
      </Contents>
      <DummyBar height="120px" />
    </>
  );
};

export default DetailPage;