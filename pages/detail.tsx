import { useRouter } from 'next/router';
import CocktailInfo from '../components/CocktailInfo';

const DetailPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <CocktailInfo
        {...{
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
          cocktailName: '블루하와이',
          favoriteCount: 12,
          description: '음료수 블루하와이랑 다르게 달지않다.',
          tags: [
            { text: '럼', backgroundColor: '#7CB587', href: '' },
            { text: '10~15%', backgroundColor: '#7CA1B5', href: '' },
            { text: '중간 길이 태그', href: '' },
            { text: '이건 살짝 좀 긴 태그', href: '' },
            { text: '짧은 태그', href: '' },
            { text: '다시 매우 긴 태그', href: '' },
          ],
        }}
      />
    </div>
  );
};

export default DetailPage;
