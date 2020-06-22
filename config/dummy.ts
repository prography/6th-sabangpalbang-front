export const banner = [
  { src: 'banner_temp.jpeg', alt: '', href: '' },
  { src: 'banner_temp2.jpg', alt: '', href: '' },
  { src: 'banner_temp3.jpeg', alt: '', href: '' },
];

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
  }
];

export const tagList = [
  {
    idx: 0,
    name: '그레나딘 시럽',
  },
  {
    idx: 1,
    name: '레몬 주스',
  },
  {
    idx: 2,
    name: '도수가 쎈',
  },
  {
    idx: 3,
    name: '깔루아',
  },
  {
    idx: 4,
    name: '딸기',
  },
  {
    idx: 5,
    name: '라임',
  },
  {
    idx: 6,
    name: '럼',
  },
  {
    idx: 7,
    name: '꼬냑',
  },
  {
    idx: 8,
    name: '데킬라',
  },
  {
    idx: 9,
    name: '라임 주스',
  },
  {
    idx: 10,
    name: '레몬',
  },
  {
    idx: 11,
    name: '메론',
  },
  {
    idx: 12,
    name: '바나나 리큐르',
  },
  {
    idx: 13,
    name: '베르무트',
  },
  {
    idx: 14,
    name: '리큐어,',
  },
  {
    idx: 15,
    name: '말리부',
  },
  {
    idx: 16,
    name: '리큐어',
  },
  {
    idx: 17,
    name: '바나나',
  },
  {
    idx: 18,
    name: '바카디 151',
  },
  {
    idx: 19,
    name: '베네딕틴 D.O.M.',
  },
  {
    idx: 20,
    name: '베리',
  },
  {
    idx: 21,
    name: '보드카',
  },
  {
    idx: 22,
    name: '복숭아',
  },
  {
    idx: 23,
    name: '브랜디',
  },
  {
    idx: 24,
    name: '블루 큐라소',
  },
  {
    idx: 25,
    name: '사과',
  },
  {
    idx: 26,
    name: '설탕 시럽',
  },
  {
    idx: 27,
    name: '오렌지',
  },
  {
    idx: 28,
    name: '우유',
  },
  {
    idx: 29,
    name: '적당한',
  },
  {
    idx: 30,
    name: '조금 쎈',
  },
  {
    idx: 31,
    name: '진저 에일',
  },
  {
    idx: 32,
    name: '진',
  },
  {
    idx: 33,
    name: '코코넛',
  },
  {
    idx: 34,
    name: '카시스 리큐르',
  },
  {
    idx: 35,
    name: '콜라다 믹서',
  },
  {
    idx: 36,
    name: '퀴라소',
  },
  {
    idx: 37,
    name: '크렘 드 카시스',
  },
  {
    idx: 38,
    name: '크랜베리',
  },
  {
    idx: 39,
    name: '크랜베리 주스',
  },
  {
    idx: 40,
    name: '트리플 섹',
  },
  {
    idx: 41,
    name: '파인애플',
  },
  {
    idx: 42,
    name: '피치',
  },
  {
    idx: 43,
    name: '피치 브랜디',
  },
  {
    idx: 44,
    name: '피치 시냅스',
  },
  {
    idx: 45,
    name: '피치 트리',
  },
  {
    idx: 46,
    name: '화이트 럼',
  },
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
    { name: '럼', backgroundColor: '#7CB587', idx: 0 },
    { name: '10~14%', backgroundColor: '#7CA1B5', idx: 1 },
    { name: '중간 길이 태그', idx: 2 },
    { name: '이건 살짝 좀 긴 태그', idx: 3 },
    { name: '짧은 태그', idx: 4 },
    { name: '다시 매우 긴 태그', idx: 5 },
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
