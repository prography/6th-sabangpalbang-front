import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../style';

const NavContainer = styled.nav`
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
  height: 44px;
  ${(props: ITheme) =>
    `background: linear-gradient(to right, ${props.themeColor}, ${props.secondThemeColor});`}
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

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
`;

const TopNavigation = () => {
  const theme = useTheme() as ITheme;

  return (
    <NavContainer {...theme}>
      <Link href='/'>
        <a className='nav_item active'>홈</a>
      </Link>
      <Link href='/ranking'>
        <a className='nav_item'>랭킹</a>
      </Link>
      <Link href='/mypage'>
        <a className='nav_item'>마이페이지</a>
      </Link>
    </NavContainer>
  );
};

export default TopNavigation;
