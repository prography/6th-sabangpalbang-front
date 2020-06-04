import { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../config/style';

const TabContainer = styled.div`
  background: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const TabList = styled.ul`
  display: flex;
  background-color: #f0f0f0;
  align-items: center;
  overflow: hidden;

  .tab_list_item {
    text-align: center;
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
  .tab_list_item:last-child {
    border: 0;
  }
  .tab_list_item.active {
    background-color: white;
    border: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    line-height: 34px;
    color: ${({ primaryTextColor }: { primaryTextColor: string }) =>
      primaryTextColor};
  }
`;

const Filter = styled.ul`
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
const FilterList = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  padding: 15px 10px;
  & > li:first-child {
    margin: 0;
  }
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
  const theme = useTheme() as ITheme;
  const [selectedFilter, setFilter] = useState(0);
  const tabListRef = useRef<HTMLUListElement | null>(null);

  return (
    <TabContainer>
      <TabList
        primaryTextColor={theme.primaryTextColor}
        secondTextColor={theme.secondTextColor}
        ref={tabListRef}
      >
        {filters.map(({ category }, i) => (
          <li
            style={i == selectedFilter - 1 ? { border: '0' } : {}}
            key={i}
            className={`tab_list_item ${selectedFilter == i ? 'active' : ''}`}
            onClick={() => {
              i != selectedFilter ? tabListRef.current?.scrollTo(0, 0) : '';
              setFilter(i);
            }}
          >
            {category}
          </li>
        ))}
      </TabList>
      <FilterList>
        {filters[selectedFilter].filterList.map((filter, i) => (
          <Filter key={i}>
            <a>{filter.filterName}</a>
            <img src={filter.filterImage.src} alt={filter.filterImage.alt} />
          </Filter>
        ))}
      </FilterList>
    </TabContainer>
  );
};

export default FilterTab;
