import { useState, createRef } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Link from 'next/link';

const TabList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #f0f0f0;
  height: 44px;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  & > div {
    font-size: 18px;
    font-weight: 700;
    color: ${({
      secondTextColor,
    }: {
      primaryTextColor: string;
      secondTextColor: string;
    }) => secondTextColor};
    flex: 1;
    border-right: 1px solid #c3c3c3;
    height: fit-content;
    padding: 5px 0;
  }
  & > div:nth-last-child(1) {
    border: 0;
  }
  & > div.active {
    background-color: white;
    border: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    line-height: 34px;
    color: ${({
      primaryTextColor,
    }: {
      primaryTextColor: string;
      secondTextColor: string;
    }) => primaryTextColor};
  }
`;

const Filter = styled.div`
  display: inline-flex;
  width: 42vw;
  height: 25.14vw;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  text-align: center;
  margin-left: 10px;
  img {
    width: 100%;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
  }
  a {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(99, 99, 99, 0.5);
    color: white;
    font-size: 24px;
    font-weight: 700;
    line-height: 25.14vw;
  }
`;
const FilterList = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 15px 10px;
  & > div:first-child {
    margin: 0;
  }
`;

const StyledLink = styled.a`
  display: block;
  padding: 15px;
  margin: 0 20px;
  text-align: center;
  border-top: 1px solid #c3c3c3;
  color: ${({ themeColor }: { themeColor: string }) => themeColor};
`;

interface IImageInfo {
  src: string;
  alt: string;
}

interface IProps {
  filters: {
    category: string;
    filterList: {
      href: string;
      filterName: string;
      filterImage: IImageInfo;
    }[];
  }[];
}

const FilterTab = ({ filters }: IProps) => {
  const [selectedFilter, setFilter] = useState(0);
  const ref: React.RefObject<HTMLDivElement> = createRef();
  return (
    <ThemeConsumer>
      {(theme) => (
        <div
          style={{
            background: 'white',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.3)',
            marginBottom: '20px',
          }}
        >
          <TabList
            primaryTextColor={theme.primaryTextColor}
            secondTextColor={theme.secondTextColor}
          >
            {filters.map(({ category }, i) => (
              <div
                style={i == selectedFilter - 1 ? { border: '0' } : {}}
                key={i}
                className={selectedFilter == i ? 'active' : ''}
                onClick={() => {
                  i != selectedFilter ? ref.current?.scrollTo(0, 0) : '';
                  setFilter(i);
                }}
              >
                {category}
              </div>
            ))}
          </TabList>
          <FilterList ref={ref}>
            {filters[selectedFilter].filterList.map((filter, i) => (
              <Filter key={i}>
                <a>{filter.filterName}</a>
                <img
                  src={filter.filterImage.src}
                  alt={filter.filterImage.alt}
                />
              </Filter>
            ))}
          </FilterList>
          <Link href="filters/">
            <StyledLink themeColor={theme.themeColor}>
              더 많은 필터보기
            </StyledLink>
          </Link>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default FilterTab;
