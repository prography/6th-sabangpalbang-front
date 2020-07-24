import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import CocktailCardList from '../components/CocktailCardList';
import { RootState } from '../src/reducers';
import { cocktailListRequest } from '../src/reducers/list';


const ListPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const name=router.query.name?String(router.query.name):null;
  const abvMin=router.query.abvMin?Number(router.query.abvMin):null;
  const abvMax=router.query.abvMax?Number(router.query.abvMax):null;
  
  const { nameList, loading } = useSelector(
    (state: RootState) => state.list
  );
  
  useEffect(() => {
		dispatch(cocktailListRequest(name, abvMin, abvMax));
	}, [router.query]);

  return (
    <div>
      <CocktailCardList cocktailList={nameList} loading={loading || !nameList} />
    </div>
  );
};

export default ListPage;