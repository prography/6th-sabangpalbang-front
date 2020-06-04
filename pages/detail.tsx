import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import CocktailInfo from '../components/CocktailInfo';
import CocktailSummary from '../components/CocktailSummary';
import CocktailReview from '../components/CocktailReview';
import { RootState } from '../reducers';
import { cocktailDetailRequest } from '../reducers/cocktailDetail';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
`;

const DetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cocktailDetail);
  useEffect(() => {
    dispatch(
      cocktailDetailRequest(
        Array.isArray(router.query.id) ? router.query.id[0] : router.query.id
      )
    );
  }, []);
  console.log(data);
  return (
    <GridDiv>
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
      <CocktailSummary
        abv={3}
        base={{ text: '럼', backgroundColor: '#7CB587', href: '' }}
        ingredients={['라임', '민트', '소다', '설탕']}
        flavor={'민트향이나며 청량감 있는 칵테일'}
      />
      <CocktailReview
        reviews={[
          {
            src: '/account.svg',
            alt: 'user profile img',
            name: '초코쿠키',
            isFavorite: false,
            text:
              '생각보다 민트 향이 강했지만 그래도 상큼한거 좋아하시거나 민트 잘먹으시면 좋아할듯 합니다 ㅎㅎ 맛있습니다. 쓸데없이 긴문장을 만들기 위해서 의식의 흐름대로 치고 있는 문장이다. 가위바위보 도레미파솔라시도 가나다라마바사 아자차카 타파하',
            day: '2020-05-12',
          },
          {
            src: '/ironman.jpg',
            alt: 'user profile img',
            name: 'IRONMAN',
            isFavorite: true,
            text: '밍밍하니 민트향만 나고 다른 달콤한 술이더 맛있네요.',
            day: '2020-05-30',
          },
        ]}
      />
      <div>추천 칵테일</div>
    </GridDiv>
  );
};

export default DetailPage;
