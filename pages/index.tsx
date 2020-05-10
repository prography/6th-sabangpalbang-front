import CocktailCard from '../components/CocktailCard';

interface IProps {}

const IndexPage = (props: IProps) => {
  return (
    <div>
      <CocktailCard
        imageInfo={{
          src:
            'https://lh3.googleusercontent.com/proxy/UPfo-MYtzksVp8pZKNqNPpTcUo7QtSyyJ8XPJh4axZEj0mbY9BawG7CBuqiGI8_LgGN7-2MQ0y1motb4AWnpjKkLc25RIaRz-G0IZG9V7lmMQxJ6OL7MwoozqUzGaNbUYHwi5hnrhZ_7RT94Jb4-l02fOQrpwCaJWENO_A',
          alt: '블랙 러시안',
        }}
        alcoholDegree={20}
        cocktailName={'블랙 러시안'}
        cocktailID={1}
        ingredients={['깔루아', '보드카']}
      />
    </div>
  );
};

export default IndexPage;
