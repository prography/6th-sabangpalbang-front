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
    ${(props: ITheme) =>
      `background: linear-gradient(to right, ${props.themeColor}, ${props.secondThemeColor});`}
    display: flex;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .nav_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 5px;

    .text {
      position: relative;
      text-align: center;
      padding: 11px 0;
      font-size: 18px;
      line-height: 22px;
      font-weight: bold;
      color: #fff;
    }

    &.active .text::after {
      position: absolute;
      right: -2px;
      bottom: 0;
      left: -2px;
      height: 2px;
      background: #fff;
      content: '';
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
          <a className='nav_item active'><span className="text">홈</span></a>
        </Link>
        <Link href='/ranking'>
          <a className='nav_item'><span className="text">랭킹</span></a>
        </Link>
        <Link href='/mypage'>
          <a className='nav_item'><span className="text">마이페이지</span></a>
        </Link>
      </div>
    </NavContainer>
  );
};

export default TopNavigation;
