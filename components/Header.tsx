import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  .fixed_div {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    height: 44px;
    padding: 0 20px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }

  .logo {
    width: 40px;
  }
  .search_logo {
    width: 24px;
  }

<<<<<<< HEAD
  &::after {
    content: '';
    display: block;
    height: 44px;
  }
`;
=======
interface IProps {
  display?: string;
}
>>>>>>> master

const Header = () => {
  return (
<<<<<<< HEAD
    <HeaderContainer>
      <div className='fixed_div'>
        <Link href='/'>
          <img className='logo' src='logo.png' alt='메인페이지로 이동' />
        </Link>
        <img className='search_logo' src='search.png' alt='검색하기' />
      </div>
    </HeaderContainer>
=======
    <Bar style={{ display }}>
      <img style={{ width: '40px' }} src="logo.png" alt="CocktanderLogo" />
      <img style={{ width: '24px' }} src="search.png" alt="SearchIcon" />
    </Bar>
>>>>>>> master
  );
};

export default Header;
