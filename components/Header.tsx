import { useState, createRef } from 'react';
import Link from 'next/link';
import styled, { useTheme } from 'styled-components';
import { Slider } from 'primereact/slider';
import { ITheme, baseTagStyleList } from '../config/style';
import Tag from './Tag';

interface IStyleProps extends ITheme {
  fixedDivHeight: string;
  boxShadow: boolean;
}

const HeaderContainer = styled.header`
  .fixed_div {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    min-height: 44px;
    padding: 0 20px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    border-bottom: 1px solid #ddd;
  }
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #fc834d;
  }
  .logo {
    width: 40px;
  }
  .search_logo {
    width: 24px;
  }

  .input_form {
    height: 30px;
    flex: 1;
    margin: 0 15px;
  }

  .input_text {
    width: calc(100% - 40px);
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #ededed;
    font-size: 18px;
    padding: 0 6px;
  }

  .filter_img {
    vertical-align: bottom;
    height: 100%;
    padding: 5px 0;
    padding-left: 15px;
  }

  .none {
    display: none;
  }
  .block {
    display: block;
  }

  .filter_div {
    z-index: 11;
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    display: block;
    height: ${({ fixedDivHeight }: IStyleProps) => fixedDivHeight};
  }
  .p-slider-horizontal {
    flex: 1;
    margin: 0 10px;
    position: relative;
    background-color: #c8c8c8;
    height: 0.286em;
  }
  .p-slider-range {
    background-color: ${({ themeColor }: IStyleProps) => themeColor} !important;
    top: 0;
    height: 100%;
    position: absolute;
    font-size: 0.7em;
    display: block;
    border: 0;
    background-position: 0 0;
  }

  .p-slider .p-slider-handle {
    top: 50%;
    margin-top: -0.5715em;
    height: 1.143em;
    width: 1.143em;
    border-radius: 100%;
    transition: box-shadow 0.2s;
    margin-left: -0.6em;
    position: absolute;
    cursor: default;
    touch-action: none;
    z-index: 1;
    box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.3);
    border: 3px solid white !important;
    background-color: ${({ themeColor }: IStyleProps) => themeColor} !important;
  }
  .range-value {
    width: 38px;
    text-align: center;
    font-size: inherit;
    color: inherit;
  }
  .row {
    color: ${({ secondTextColor }: IStyleProps) => secondTextColor};
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 40px;
    margin: 0 15px;
    border-bottom: 1px solid #ddd;
  }
  .row .type {
    min-width: 42px;
  }
  .row:last-of-type {
    border-bottom: 0;
  }
  .row .tag-list {
    flex: 1;
    min-height: 30px;
    padding: 5px 0;
    margin: 0 10px;
    overflow-x: auto;
    white-space: nowrap;
  }
  .row .all-tag {
    width: 100%;
    padding: 5px 0;
    padding-left: 52px;
    border-top: 1px solid #ddd;
  }
  .row .arrow {
    float: right;
    width: 16px;
  }
`;

const tagList = [
  { text: '태그', idx: 0 },
  { text: '여섯글자 태그', idx: 1 },
  { text: '태애그', idx: 2 },
  { text: '논알콜', idx: 3 },
  { text: '태애애애그', idx: 4 },
  { text: '태그태그', idx: 5 },
  { text: '비오고잇다', idx: 6 },
  { text: '파랑색', idx: 7 },
  { text: '열대', idx: 8 },
  { text: '복숭아향', idx: 9 },
  { text: '레몬맛', idx: 10 },
  { text: '태그', idx: 11 },
  { text: '여섯글자 태그', idx: 12 },
  { text: '태애그', idx: 13 },
  { text: '논알콜', idx: 14 },
  { text: '태애애애그', idx: 15 },
  { text: '태그태그', idx: 16 },
  { text: '비오고잇다', idx: 17 },
  { text: '파랑색', idx: 18 },
  { text: '열대과일처럼긴', idx: 19 },
];

const Header = () => {
  const theme = useTheme() as ITheme;
  const formRef = createRef<HTMLFormElement>();
  const [searchDisplay, setSearchDisplay] = useState<'block' | 'none'>('none');
  const [filterDisplay, setFilterDisplay] = useState<'block' | 'none'>('none');
  const [rangeValues, setRangeValues] = useState<[number, number]>([0, 40]);
  const [selectedBaseTag, selectBaseTag] = useState<number[]>([]);
  const [selectedTag, selectTag] = useState<number[]>([]);
  const [tagDisplay, setTagDisplay] = useState<'block' | 'none'>('none');

  const handleSubmit = () => {
    if (searchDisplay === 'none') {
      setSearchDisplay('block');
      return;
    }
    if (formRef.current?.cocktail.value !== '') {
      formRef.current?.submit();
    }
  };
  return (
    <HeaderContainer boxShadow={false} fixedDivHeight={'44px'} {...theme}>
      <div className='fixed_div'>
        <Link href='/'>
          <img className='logo' src='/logo.png' alt='메인페이지로 이동' />
        </Link>
        <form ref={formRef} className={`input_form ${searchDisplay}`} action=''>
          <input
            placeholder='칵테일명...'
            name='cocktail'
            className='input_text'
            type='text'
          />
          <img
            onClick={() =>
              setFilterDisplay(filterDisplay === 'none' ? 'block' : 'none')
            }
            className='filter_img'
            src={
              filterDisplay === 'none' ? '/filter.svg' : '/selected_filter.svg'
            }
            alt='필터설정'
          />
        </form>
        <div className={`title ${searchDisplay === 'none' ? 'block' : 'none'}`}>
          칵텐더
        </div>
        <img
          onClick={handleSubmit}
          className='search_logo'
          src='/search.png'
          alt='검색하기'
        />
      </div>
      <div className={`filter_div ${filterDisplay}`}>
        <div className='row'>
          <span className='type'>도수%</span>
          <span className='range-value'>{rangeValues[0]}</span>
          <Slider
            max={40}
            value={rangeValues}
            onChange={(e) =>
              setRangeValues(typeof e.value === 'number' ? [0, 40] : e.value)
            }
            range={true}
          />
          <span className='range-value'>
            {rangeValues[1] === 40 ? '40+' : rangeValues[1]}
          </span>
        </div>
        <div className='row'>
          <span className='type'>베이스</span>
          <div className='tag-list'>
            {baseTagStyleList.map((tag, i) => {
              const params = {
                textColor: selectedBaseTag.includes(i) ? undefined : '#aeaeae',
                borderColor: selectedBaseTag.includes(i)
                  ? undefined
                  : '#aeaeae',
                backgroundColor: selectedBaseTag.includes(i)
                  ? tag.backgroundColor
                  : '#fff',
                text: tag.text,
              };
              return (
                <Tag
                  onClickHandler={(e) => {
                    e.preventDefault();
                    selectBaseTag(
                      selectedBaseTag.includes(tag.idx)
                        ? [...selectedBaseTag.filter((idx) => idx !== tag.idx)]
                        : [...selectedBaseTag, tag.idx]
                    );
                  }}
                  fontSize={12}
                  {...params}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className='row'>
          <span className='type'>태그</span>
          <div className='tag-list'>
            {selectedTag.map((tagIdx) => (
              <Tag
                onClickHandler={(e) => {
                  e.preventDefault();
                  selectTag([...selectedTag.filter((idx) => idx !== tagIdx)]);
                }}
                text={tagList[tagIdx].text}
                fontSize={12}
                key={tagIdx}
              />
            ))}
          </div>
          <img
            onClick={() =>
              setTagDisplay(tagDisplay === 'none' ? 'block' : 'none')
            }
            className='arrow'
            src={tagDisplay === 'none' ? '/down-arrow.svg' : '/up-arrow.svg'}
            alt='전체태그 접기/펴기'
          />
          <div className={`all-tag ${tagDisplay}`}>
            {tagList.map((tag, i) => (
              <Tag
                onClickHandler={(e) => {
                  e.preventDefault();
                  selectTag(
                    selectedTag.includes(tag.idx)
                      ? [...selectedTag.filter((idx) => idx !== tag.idx)]
                      : [...selectedTag, tag.idx]
                  );
                }}
                text={tag.text}
                fontSize={12}
                backgroundColor={selectedTag.includes(i) ? undefined : '#fff'}
                textColor={selectedTag.includes(i) ? undefined : '#aeaeae'}
                borderColor={selectedTag.includes(i) ? undefined : '#aeaeae'}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
