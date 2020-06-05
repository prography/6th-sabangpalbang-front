export const banner = [
  { src: 'banner_temp.jpeg', alt: '', href: '' },
  { src: 'banner_temp2.jpg', alt: '', href: '' },
  { src: 'banner_temp3.jpeg', alt: '', href: '' },
];

//   { idx: 0, text: '데킬라', backgroundColor: '#499399', borderColor: '#fff' },
//   { idx: 1, text: '럼', backgroundColor: '#DCCA00', borderColor: '#fff' },
//   { idx: 2, text: '진', backgroundColor: '#AF8C60', borderColor: '#fff' },
//   { idx: 3, text: '리큐어', backgroundColor: '#D452D9', borderColor: '#fff' },
//   { idx: 4, text: '보드카', backgroundColor: '#2E82F7', borderColor: '#fff' },
//   { idx: 5, text: '브랜디', backgroundColor: '#FF7900', borderColor: '#fff' },
//   { idx: 6, text: '기타' },

export const filterTab = [
  {
    category: '베이스',
    filterList: [
      {
        pathname: '/list',
        query: { base: 0 },
        href: '/list?base=0',
        filterName: '데킬라',
        filterImage: { src: 'tequila.jpeg', alt: '' },
      },
      {
        pathname: '/list',
        query: { base: 1 },
        href: '/list?base=1',
        filterName: '럼',
        filterImage: { src: 'rum.jpg', alt: '' },
      },
      {
        pathname: '/list',
        query: { base: 2 },
        href: '/list?base=2',
        filterName: '진',
        filterImage: { src: 'gin.jpg', alt: '' },
      },
      {
        pathname: '/list',
        query: { base: 3 },
        href: '/list?base=3',
        filterName: '리큐어',
        filterImage: { src: 'liqueur.jpeg', alt: '' },
      },
      {
        pathname: '/list',
        query: { base: 4 },
        href: '/list?base=4',
        filterName: '보드카',
        filterImage: { src: 'vodka.jpeg', alt: '' },
      },
      {
        pathname: '/list',
        query: { base: 5 },
        href: '/list?base=5',
        filterName: '브랜디',
        filterImage: { src: 'brandy.jpeg', alt: '' },
      },
    ],
  },
  {
    category: '도수',
    filterList: [
      {
        pathname: '/list',
        query: { abvMin: 0, abvMax: 0 },
        href: '/list?abvMin=0&abvMax=0',
        filterName: '0%',
        filterImage: { src: 'non_alcohol.png', alt: '' },
      },
      {
        pathname: '/list',
        query: { abvMin: 1, abvMax: 5 },
        href: '/list?abvMin=1&abvMax=5',
        filterName: '1~5%',
        filterImage: { src: 'one_to_five.jpg', alt: '' },
      },
      {
        pathname: '/list',
        query: { abvMin: 6, abvMax: 10 },
        href: '/list?abvMin=6&abvMax=10',
        filterName: '6~10%',
        filterImage: { src: 'six_to_ten.jpg', alt: '' },
      },
      {
        pathname: '/list',
        query: { abvMin: 11, abvMax: 15 },
        href: '/list?abvMin=11&abvMax=15',
        filterName: '11~15%',
        filterImage: { src: 'eleven_to_fifteen.jpg', alt: '' },
      },
      {
        pathname: '/list',
        query: { abvMin: 16, abvMax: 20 },
        href: '/list?abvMin=16&abvMax=20',
        filterName: '16~20%',
        filterImage: { src: 'sixteen_to_twelve.jpg', alt: '' },
      },
      {
        pathname: '/list',
        query: { abvMin: 21 },
        href: '/list?abvMin=21',
        filterName: '21%~',
        filterImage: { src: 'twelve_one.jpg', alt: '' },
      },
    ],
  },
  {
    category: '얘 뭐 넣을까?',
    filterList: [],
  },
];

export const mainCocktailListInfo = [
  {
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
    alt: '',
    href: '',
    name: '블루 하와이 블루 하와이 하와이안하와이안',
    tags: [
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
    ],
  },
  {
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
    alt: '',
    href: '',
    name: '블루 하와이',
    tags: [
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
    ],
  },
  {
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
    alt: '',
    href: '',
    name: '블루 하와이',
    tags: [
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
    ],
  },
  {
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
    alt: '',
    href: '',
    name: '블루 하와이',
    tags: [
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
    ],
  },
  {
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
    alt: '',
    href: '',
    name: '블루 하와이',
    tags: [
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
    ],
  },
  {
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
    alt: '',
    href: '',
    name: '블루 하와이',
    tags: [
      { text: '럼', bgColor: '#7CB587', href: '' },
      { text: '10~15%', bgColor: '#7CA1B5', href: '' },
    ],
  },
];

export const tagList = [
  { text: '태그', idx: 0 },
  { text: '여섯글자 태그', idx: 1 },
  { text: '태애그', idx: 2 },
  { text: '논알콜', idx: 3 },
  { text: '태애애애그', idx: 4 },
  { text: '태그태그', idx: 5 },
  { text: '비오고잇다', idx: 6 },
  { text: '열대', idx: 7 },
  { text: '파랑색', idx: 8 },
  { text: '복숭아향', idx: 9 },
  { text: '레몬맛', idx: 10 },
  { text: '태그', idx: 11 },
  { text: '여섯글자 태그', idx: 12 },
  { text: '태애그', idx: 13 },
  { text: '논알콜', idx: 14 },
  { text: '태애애애그', idx: 15 },
  { text: '태그태그', idx: 16 },
  { text: '비오고잇다', idx: 17 },
  { text: '파랑색', idx: 18 },
  { text: '열대과일처럼긴', idx: 19 },
];

export const cocktailDetailData = {
  cocktailName: '블루하와이',
  cocktailIdx: 1,
  backgroundImg: {
    src:
      'https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/maldives6.jpg?w=800&h=312&crop=1',
    alt: '',
  },
  cocktailImg: {
    src:
      'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_blue_hawaiian-1.png',
    alt: '',
  },
  favoriteCount: 12,
  description: '음료수 블루하와이랑 다르게 달지않다.',
  tags: [
    { text: '럼', backgroundColor: '#7CB587', idx: 0 },
    { text: '10~14%', backgroundColor: '#7CA1B5', idx: 1 },
    { text: '중간 길이 태그', idx: 2 },
    { text: '이건 살짝 좀 긴 태그', idx: 3 },
    { text: '짧은 태그', idx: 4 },
    { text: '다시 매우 긴 태그', idx: 5 },
  ],
  abv: 13,
  abvMin: 10,
  abvMax: 14,
  base: 1,
  ingredients: ['라임', '민트', '소다', '설탕'],
  flavor: '민트향이나며 청량감 있는 칵테일',
  reviews: [
    {
      profile: { src: '/account.svg', alt: 'user profile img' },
      name: '초코쿠키',
      isFavorite: false,
      text:
        '생각보다 민트 향이 강했지만 그래도 상큼한거 좋아하시거나 민트 잘먹으시면 좋아할듯 합니다 ㅎㅎ 맛있습니다. 쓸데없이 긴문장을 만들기 위해서 의식의 흐름대로 치고 있는 문장이다. 가위바위보 도레미파솔라시도 가나다라마바사 아자차카 타파하',
      day: '2020-05-12',
    },
    {
      profile: { src: '/ironman.jpg', alt: 'user profile img' },
      name: 'IRONMAN',
      isFavorite: true,
      text: '밍밍하니 민트향만 나고 다른 달콤한 술이더 맛있네요.',
      day: '2020-05-30',
    },
  ],
};
