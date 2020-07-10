import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ICocktail } from '../src/interfaces/cocktail';
import CocktailCard from './CocktailCard';
import WithLoading from './WithLoading';

interface IProps {
  cocktailList: ICocktail[];
  tag: boolean;
  number: boolean;
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

const CocktailCardList = ({ cocktailList, tag = true, number = false }: IProps) => {
  return (
    <CardList>
      <ul className="card_list">
        {cocktailList && cocktailList.map((info, i) => {
            return <CocktailCard key={info.idx} info={info} tag={tag} number={number} order={i+1} />
        })}
      </ul>
    </CardList>
  );
};
export default WithLoading(CocktailCardList);
