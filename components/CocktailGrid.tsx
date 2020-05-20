import { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Link from 'next/link';

const Head = styled.div`
  padding: 20px 10px 10px;
  span {
    margin-right: 10px;
    color: ${({
      secondTextColor,
    }: {
      secondTextColor: string;
      themeColor: string;
    }) => secondTextColor};
    &.active {
      color: ${({
        themeColor,
      }: {
        secondTextColor: string;
        themeColor: string;
      }) => themeColor};
    }
  }
  a {
    float: right;
    color: ${({
      secondTextColor,
    }: {
      secondTextColor: string;
      themeColor: string;
    }) => secondTextColor};
  }
`;
const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

interface IProps {
  CocktailCardComponent: (props: any) => JSX.Element;
  cocktailInfos: {
    src: string;
    alt: string;
    href: string;
    name: string;
    tags?: {
      text: string;
      href: string;
      textColor?: string;
      backgroundColor?: string;
    }[];
    favorite?: boolean;
  }[];
}
const CocktailGrid = ({ CocktailCardComponent, cocktailInfos }: IProps) => {
  const [sort, setSort] = useState(0);
  return (
    <ThemeConsumer>
      {(theme) => (
        <div style={{ background: 'white' }}>
          <Head
            themeColor={theme.themeColor}
            secondTextColor={theme.secondTextColor}
          >
            <span
              className={sort == 0 ? 'active' : ''}
              onClick={() => setSort(0)}
            >
              #랜덤순
            </span>
            <span
              className={sort == 1 ? 'active' : ''}
              onClick={() => setSort(1)}
            >
              #이름순
            </span>
            <span
              className={sort == 2 ? 'active' : ''}
              onClick={() => setSort(2)}
            >
              #인기순
            </span>
            <Link href={'list'}>
              <a>더보기 ></a>
            </Link>
          </Head>
          <FlexDiv>
            {cocktailInfos.map((info, i) => (
              <CocktailCardComponent key={i} {...info} />
            ))}
          </FlexDiv>
        </div>
      )}
    </ThemeConsumer>
  );
};
export default CocktailGrid;
