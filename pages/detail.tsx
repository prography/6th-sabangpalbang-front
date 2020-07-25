import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import CocktailInfo from '../components/CocktailInfo';
import CocktailSummary from '../components/CocktailSummary';
import CocktailReview from '../components/CocktailReview';
import { RootState } from '../src/reducers';
import { cocktailDetailRequest } from '../src/reducers/cocktailDetail';
import ContentLoader from 'react-content-loader';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
  svg {
    background-color: #fff;
  }
`;

const InfoLoader = () => (
  <ContentLoader viewBox='0 0 425 400'>
    <rect x='0' y='0' rx='0' ry='0' width='425' height='200' />
    <rect x='25' y='215' rx='10' ry='10' width='140' height='170' />
    <rect x='200' y='230' rx='10' ry='10' width='140' height='30' />
    <rect x='200' y='270' rx='10' ry='10' width='90' height='16' />
    <rect x='200' y='296' rx='10' ry='10' width='50' height='14' />
    <rect x='260' y='296' rx='10' ry='10' width='50' height='14' />
    <rect x='320' y='296' rx='10' ry='10' width='80' height='14' />
    <rect x='200' y='320' rx='10' ry='10' width='140' height='14' />
    <rect x='200' y='344' rx='10' ry='10' width='40' height='14' />
    <rect x='250' y='344' rx='10' ry='10' width='80' height='14' />
  </ContentLoader>
);

const SummaryLoader = () => (
  <ContentLoader viewBox='0 0 425 300'>
    <rect x='20' y='20' rx='10' ry='10' width='80' height='30' />
    <circle cx='50' cy='105' r='25' />
    <rect x='100' y='90' rx='10' ry='10' width='300' height='30' />
    <circle cx='50' cy='175' r='25' />
    <rect x='100' y='160' rx='10' ry='10' width='300' height='30' />
    <circle cx='50' cy='245' r='25' />
    <rect x='100' y='230' rx='10' ry='10' width='300' height='30' />
  </ContentLoader>
);

const ReviewLoader = () => (
  <ContentLoader viewBox='0 0 425 300'>
    <rect x='20' y='20' rx='10' ry='10' width='80' height='30' />
    <circle cx='50' cy='100' r='30' />
    <rect x='20' y='135' rx='8' ry='8' width='60' height='15' />
    <rect x='100' y='80' rx='10' ry='10' width='300' height='20' />
    <rect x='100' y='105' rx='10' ry='10' width='280' height='20' />
    <circle cx='50' cy='210' r='30' />
    <rect x='20' y='245' rx='8' ry='8' width='60' height='15' />
    <rect x='100' y='190' rx='10' ry='10' width='300' height='20' />
    <rect x='100' y='215' rx='10' ry='10' width='280' height='20' />
  </ContentLoader>
);

const DetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cocktailDetail);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(
      cocktailDetailRequest(
        Array.isArray(router.query.id) ? router.query.id[0] : router.query.id
      )
    );
  }, []);

  return (
    <GridDiv>
      {data.loading || !data.name ? (
        <>
          <InfoLoader />
          <SummaryLoader />
          <ReviewLoader />
        </>
      ) : (
        <>
          <CocktailInfo
            cocktailImg={{src:data.imgUrl, alt:"cocktail image"}}
            cocktailName={data.name}
            favoriteCount={data.likes.length}
            description={data.description}
            tags={data.tags}
          />
          <CocktailSummary
            abv={data.abv}
            abvMin={data.abvClassification.minAbv}
            abvMax={data.abvClassification.maxAbv}
            base={data.base}
            ingredients={data.ingredients}
            flavors={data.flavors}
          />
          <CocktailReview reviews={user.userInfo.idx?data.reviews:null} />
          {/* <div>추천 칵테일</div> */}
        </>
      )}
    </GridDiv>
  );
};

export default DetailPage;
