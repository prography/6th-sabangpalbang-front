import styled, { ThemeConsumer } from 'styled-components';
import Link from 'next/link';

const Bar = styled.div`
  width: 100%;
  height: 44px;
  ${(props: { themeColor: string; secondThemeColor: string }) =>
    `background: linear-gradient(to right, ${props.themeColor}, ${props.secondThemeColor});`}
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  div {
    flex: 1;
    text-align: center;
  }
  a {
    display: inline-block;
    padding: 0 5px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    line-height: 44px;
    height: 44px;
    &.active {
      border-bottom: 3px solid white;
    }
  }
`;

interface IProps {
  page: number;
}

// 페이지 어딘지 알아내서 체크해야함
const TopNavigation = ({ page }: IProps) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Bar {...theme}>
          <Link href={`/`}>
            <div>
              <a className={page == 0 ? 'active' : ''}>홈</a>
            </div>
          </Link>
          <Link href={`/ranking`}>
            <div>
              <a className={page == 1 ? 'active' : ''}>랭킹</a>
            </div>
          </Link>
          <Link href={`/mypage`}>
            <div>
              <a className={page == 2 ? 'active' : ''}>마이페이지</a>
            </div>
          </Link>
        </Bar>
      )}
    </ThemeConsumer>
  );
};

export default TopNavigation;
