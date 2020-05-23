import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
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

  .logo {
    width: 40px;
  }
  .search_logo {
    width: 24px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'>
        <img className='logo' src='logo.png' alt='메인페이지로 이동' />
      </Link>
      <img className='search_logo' src='search.png' alt='검색하기' />
    </HeaderContainer>
  );
};

export default Header;
