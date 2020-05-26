import styled from 'styled-components';

const Bar = styled.div`
  width: 100%;
  height: 44px;
  padding: 0 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface IProps {
  display?: string;
}

const Header = ({ display }: IProps) => {
  return (
    <Bar style={{ display }}>
      <img style={{ width: '40px' }} src="logo.png" alt="CocktanderLogo" />
      <img style={{ width: '24px' }} src="search.png" alt="SearchIcon" />
    </Bar>
  );
};

export default Header;
