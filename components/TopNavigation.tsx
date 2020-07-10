import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../config/style';

const NavContainer = styled.nav`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    
  .inner_container {
    display: flex;
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
    height: 44px;
    z-index: 10;
  ${(props: ITheme) =>
    `background: linear-gradient(to right, ${props.themeColor}, ${props.secondThemeColor});`}
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

  @media screen and (min-width: 768px) {
      ${(props: ITheme) =>
    `background: linear-gradient(to right, ${props.themeColor}, ${props.secondThemeColor});`}
    .inner_container {
      position: static;
      align-items: center;
      max-width: 968px;
      height: 64px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .nav_item {
      flex: 0 0 auto;

      .text {
        padding: 0;
        font-size: 24px;
        line-height: 30px;
      }
      &.active .text::after {
        content: none;
      }

      & + .nav_item {
        margin-left: 30px;
      }
      &.active .text,
      &:hover .text {
        font-weight: bold;
        color: #F8BD1D;
      }
    }

    &::after {
      content: none;
    }
  }
`;

const TopNavigation = () => {
  const theme = useTheme() as ITheme;
  const router = useRouter();
  const curPage = router.pathname;

  return (
    <NavContainer {...theme}>
      <div className='inner_container'>
        <Link href='/'>
          <a className={`nav_item ${curPage === '/' ? 'active' : ''}`}><span className="text">홈</span></a>
        </Link>
        <Link href='/ranking'>
          <a className={`nav_item ${curPage === '/ranking' ? 'active' : ''}`}><span className="text">랭킹</span></a>
        </Link>
        <Link href='/mypage'>
          <a className={`nav_item ${curPage === '/mypage' ? 'active' : ''}`}><span className="text">마이페이지</span></a>
        </Link>
      </div>
    </NavContainer>
  );
};

export default TopNavigation;
