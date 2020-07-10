import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ICocktail } from '../src/interfaces/cocktail';
import { RootState } from '../src/reducers';
import CocktailCard from './CocktailCard';
import WithLoading from './WithLoading';

interface ICocktailList {
  randomList: null | ICocktail[];
  nameList: null | ICocktail[];
  popularList: null | ICocktail[];
}

const CardList = styled.div`
  background-color: #fff;
  
  .card_list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background: #fff;
  }

  @media screen and (min-width: 768px) {
    .card_list {
      max-width: 968px;
      margin: 0 auto;
    }
  }
`;

const CocktailCardList = ({ orderOption } : { orderOption: keyof ICocktailList}) => {
  const { randomList, nameList, popularList, loading } = useSelector(
    (state: RootState) => state.cocktail
  );
  const cocktailList = {
    randomList,
    nameList,
    popularList,
  } as ICocktailList;

 

  return (
    <CardList>
      <ul className="card_list">
        {cocktailList[orderOption] &&
          cocktailList[orderOption]!.map((info) => (
            <CocktailCard key={info.idx} info={info} />
          ))}
      </ul>
    </CardList>
  );
};
export default WithLoading(CocktailCardList);
