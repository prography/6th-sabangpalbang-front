import CardList from '../components/CardList';
import CocktailCard from '../components/CocktailCard';

interface IProps {}

const dummyCardInfos = [
  {
    imageInfo: {
      src:
        'https://lh3.googleusercontent.com/proxy/UPfo-MYtzksVp8pZKNqNPpTcUo7QtSyyJ8XPJh4axZEj0mbY9BawG7CBuqiGI8_LgGN7-2MQ0y1motb4AWnpjKkLc25RIaRz-G0IZG9V7lmMQxJ6OL7MwoozqUzGaNbUYHwi5hnrhZ_7RT94Jb4-l02fOQrpwCaJWENO_A',
      alt: '블랙 러시안',
    },
    alcoholDegree: 20,
    cocktailName: '블랙 러시안',
    cocktailID: 1,
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
    cocktailID: 2,
    ingredients: ['예거마이스터', '레드불'],
  },
  {
    imageInfo: {
      src:
        'https://lh3.googleusercontent.com/proxy/UPfo-MYtzksVp8pZKNqNPpTcUo7QtSyyJ8XPJh4axZEj0mbY9BawG7CBuqiGI8_LgGN7-2MQ0y1motb4AWnpjKkLc25RIaRz-G0IZG9V7lmMQxJ6OL7MwoozqUzGaNbUYHwi5hnrhZ_7RT94Jb4-l02fOQrpwCaJWENO_A',
      alt: '블랙 러시안',
    },
    alcoholDegree: 20,
    cocktailName: '블랙 러시안',
    cocktailID: 1,
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
    cocktailID: 2,
    ingredients: ['예거마이스터', '레드불'],
  },
];

const IndexPage = (props: IProps) => {
  return (
    <div style={{ padding: '0 1em' }}>
      <CardList
        column={2}
        CardComponent={CocktailCard}
        cardInfos={dummyCardInfos}
      />
    </div>
  );
};

export default IndexPage;
