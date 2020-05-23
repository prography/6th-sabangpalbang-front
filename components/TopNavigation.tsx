import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../config/style';

const NavContainer = styled.nav`
  .fixed_div {
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
    z-index: 10;
    height: 44px;
    ${(props: ITheme) =>
      `background: linear-gradient(to right, ${props.themeColor}, ${props.secondThemeColor});`}
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .nav_item {
    display: inline-block;
    padding: 0 5px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    line-height: 44px;

    &.active {
      border-bottom: 3px solid white;
      line-height: 40px;
    }
  }

  &::after {
    content: '';
    display: block;
    height: 44px;
  }
`;

const TopNavigation = () => {
  const theme = useTheme() as ITheme;

  return (
    <NavContainer {...theme}>
      <div className='fixed_div'>
        <Link href='/'>
          <a className='nav_item active'>홈</a>
        </Link>
        <Link href='/ranking'>
          <a className='nav_item'>랭킹</a>
        </Link>
        <Link href='/mypage'>
          <a className='nav_item'>마이페이지</a>
        </Link>
      </div>
    </NavContainer>
  );
};

export default TopNavigation;
