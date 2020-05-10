import CardList from '../components/CardList';
import CocktailCard from '../components/CocktailCard';

interface IProps {}

const dummyCardInfos = [
  {
    imageInfo: {
      src:
        'https://lh3.googleusercontent.com/proxy/h_MDgP2SWX9hJzeNzqsnonet03ZvKhm0ZFZ81mE_7uzje08WVOcxACEfOum0EKtTwiYiU8CoSFViT_OjAeYLYZUrXo-e6C7LZ45ak_s_6wW4Cwbmh-DgLrEHvIezJgvIN17lQcgwC7iWkRglaXTJN3tJzescMZ9ofoN3oGVzgZw5FvH19XHt9o8s84VP5i84Cvxv43fzJLnG7AYhhi7iTuPCwUsG8lI0svOc34JrdTv_60yyvZwtbJWfe-u7TtqJ4gWbRTfsFemumr_nkMIKoUO7r8EHjmNkuoKpBgBEHirTqPPzb-dtw6WqF7O9BS-2idUt-A4XLvNz_gnwOZXoicL0ihY',
      alt: '블랙 러시안',
    },
    alcoholDegree: 20,
    cocktailName: '블랙 러시안 블랙 러시안',
    cocktailID: 1,
    ingredients: ['깔루아', '보드ffffffffffffffff ttf카'],
  },
  {
    imageInfo: {
      src:
        'https://dailyshotimage.s3-accelerate.amazonaws.com/media/cocktails/%25Y/%25m/%25d/b6ba923c-eaa4-4526-a8c5-649dba5afe77.jpg',
      alt: '예거밤',
    },
    alcoholDegree: 20,
    cocktailName: '예거밤',
    cocktailID: 2,
    ingredients: ['예거마이스터', '레드불'],
  },
  {
    imageInfo: {
      src:
        'https://lh3.googleusercontent.com/proxy/h_MDgP2SWX9hJzeNzqsnonet03ZvKhm0ZFZ81mE_7uzje08WVOcxACEfOum0EKtTwiYiU8CoSFViT_OjAeYLYZUrXo-e6C7LZ45ak_s_6wW4Cwbmh-DgLrEHvIezJgvIN17lQcgwC7iWkRglaXTJN3tJzescMZ9ofoN3oGVzgZw5FvH19XHt9o8s84VP5i84Cvxv43fzJLnG7AYhhi7iTuPCwUsG8lI0svOc34JrdTv_60yyvZwtbJWfe-u7TtqJ4gWbRTfsFemumr_nkMIKoUO7r8EHjmNkuoKpBgBEHirTqPPzb-dtw6WqF7O9BS-2idUt-A4XLvNz_gnwOZXoicL0ihY',
      alt: '블랙 러시안',
    },
    alcoholDegree: 20,
    cocktailName: '블랙 러시안',
    cocktailID: 3,
    ingredients: ['깔루아', '보드카'],
  },
  {
    imageInfo: {
      src:
        'https://dailyshotimage.s3-accelerate.amazonaws.com/media/cocktails/%25Y/%25m/%25d/b6ba923c-eaa4-4526-a8c5-649dba5afe77.jpg',
      alt: '예거밤',
    },
    alcoholDegree: 20,
    cocktailName: '예거밤',
    cocktailID: 4,
    ingredients: ['예거마이스터', '레드불'],
  },
];

const IndexPage = (props: IProps) => {
  return (
    <div style={{ padding: '0 1em' }}>
      <CardList CardComponent={CocktailCard} cardInfos={dummyCardInfos} />
    </div>
  );
};

export default IndexPage;
