import Link from 'next/link';
import { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { ITheme } from '../config/style';

const TabContainer = styled.div`
  background: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  margin: -1px 0 20px;

  @media screen and (min-width: 768px) {
    box-shadow: none;

    .tab_list_wrapper {
      border-top: 1px solid #d6d6d6;
      border-bottom: 1px solid #d6d6d6;
    }
  }
`;

const TabList = styled.ul`
  display: flex;
  background-color: #f0f0f0;
  align-items: center;
  overflow: hidden;

  .tab_list_item {
    text-align: center;
    flex: 1;

    .tab_btn {
      display: block;
      box-sizing: content-box;
      width: 100%;
      height: 38px;
      padding: 2px 0;
      border-right: 1px solid #c3c3c3;
      outline: transparent;
      background: transparent;
      font-size: 18px;
      font-weight: bold;
      color: ${({
        secondTextColor,
      }: {
        primaryTextColor: string;
        secondTextColor: string;
      }) => secondTextColor};
    }
  }
  .tab_list_item:last-child .tab_btn {
    border: 0;
  }
  .tab_list_item.active .tab_btn {
    background-color: #fff;
    border: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: ${({
      primaryTextColor,
    }: {
      primaryTextColor: string;
      secondTextColor: string;
    }) => primaryTextColor};
  }

  @media screen and (min-width: 768px) {
    max-width: 968px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;

    .tab_list_item {
      flex: 0 0 auto;
    }
    .tab_list_item + .tab_list_item {
      margin-left: 40px;
    }
    .tab_list_item .tab_btn {
      padding: 12px 0;
      border: 0;
      font-size: 24px;
      line-height: 30px;
      cursor: pointer;
    }
    .tab_list_item .tab_btn:hover {
      color: #fc6593;
    }
    .tab_list_item.active .tab_btn {
      border-radius: 0;
      box-shadow: none;
      color: #fc6593;
    }
  }
`;

const Filter = styled.li`
  display: inline-flex;
  width: 160px;
  height: 100px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(99, 99, 99, 0.5);
    color: #fff;
    font-size: 24px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
    height: 150px;
    margin: 8px 0;
    a {
      font-size: 30px;
    }
  }
`;
const FilterList = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  padding: 15px 10px;
  & > li:first-child {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 968px;
    margin: 0 auto;
    padding: 30px 10px;
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
      pathname: string;
      query: { [name: string]: any };
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
      <div className="tab_list_wrapper">
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
              <button type="button" className="tab_btn">{category}</button>
            </li>
          ))}
        </TabList>
      </div>
      <FilterList>
        {filters[selectedFilter].filterList.map((filter, i) => (
          <Filter key={i}>
            <Link
              href={{ pathname: filter.pathname, query: filter.query }}
              as={filter.href}
            >
              <a>{filter.filterName}</a>
            </Link>
            <img src={filter.filterImage.src} alt={filter.filterImage.alt} />
          </Filter>
        ))}
      </FilterList>
    </TabContainer>
  );
};

export default FilterTab;
