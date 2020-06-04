import CocktailCardList from '../components/CocktailCardList';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 15px;
`;

const ListPage = () => {
  return (
    <StyledDiv>
      <CocktailCardList />
    </StyledDiv>
  );
};

export default ListPage;
