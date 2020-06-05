import { useDispatch, useSelector } from 'react-redux';
import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import styled, { useTheme } from 'styled-components';
import { Slider } from 'primereact/slider';
import { ITheme, baseTagStyleList } from '../config/style';
import Tag from './Tag';
import { RootState } from '../src/reducers';
import { tagListRequest } from '../src/reducers/tag';
import { useRouter } from 'next/router';

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
    height: 44px;
  }
  .p-slider-horizontal {
    flex: 1;
    margin: 0 10px;
    position: relative;
    background-color: #c8c8c8;
    height: 0.286em;
  }
  .p-slider-range {
    background-color: ${({ themeColor }: ITheme) => themeColor} !important;
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
    background-color: ${({ themeColor }: ITheme) => themeColor} !important;
  }
  .range-value {
    width: 38px;
    text-align: center;
    font-size: inherit;
    color: inherit;
  }
  .row {
    color: ${({ secondTextColor }: ITheme) => secondTextColor};
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
  .all-tag {
    width: 100%;
    padding: 5px 0;
    padding-left: 67px;
  }
  .row .arrow {
    float: right;
    width: 16px;
  }
`;

const parseQuery = (query: { [name: string]: any }) => {
  let { abvMin, abvMax, name, tag, base } = query;

  abvMin = isNaN(Number(abvMin)) ? 0 : Number(abvMin);
  abvMax = isNaN(Number(abvMax)) ? 40 : Number(abvMax);
  [abvMin, abvMax] = [Math.min(abvMin, abvMax), Math.max(abvMin, abvMax)];
  abvMin = abvMin < 0 ? 0 : abvMin;
  abvMax = abvMax > 40 ? 40 : abvMax;

  name = String(name ? name : '');
  tag = String(tag)
    .replace(/\s/g, '')
    .replace(/[^0-9,]/g, '')
    .split(',')
    .filter((s) => s !== '')
    .map((s) => Number(s));

  base = String(base)
    .replace(/\s/g, '')
    .replace(/[^0-9,]/g, '')
    .split(',')
    .filter((s) => s !== '')
    .map((s) => Number(s));

  return { abvMin, abvMax, name, tag, base };
};

const Header = () => {
  const router = useRouter();
  const theme = useTheme() as ITheme;
  const [displayFlag, setDisplayFlag] = useState({
    search: false,
    filter: false,
    tag: false,
  });
  const [inputValue, setInputValue] = useState('');
  const [abvValues, setAbvValues] = useState<[number, number]>([0, 40]);
  const [selectedBaseTag, selectBaseTag] = useState<number[]>([]);
  const [selectedTag, selectTag] = useState<number[]>([]);

  const dispatch = useDispatch();
  const { tagList } = useSelector((state: RootState) => state.tag);

  const handleSubmit = (e: MouseEvent | FormEvent) => {
    e.preventDefault();
    if (!displayFlag.search) {
      setDisplayFlag({ ...displayFlag, search: true });
      return;
    }
    // tag + text로 정보 요청해야하는곳
    const query = `?abvMin=${abvValues[0]}&abvMax=${abvValues[1]}${
      inputValue === '' ? '' : `&name=${inputValue}`
    }${selectedBaseTag.length ? `&base=${selectedBaseTag.join()}` : ''}${
      selectedTag.length ? `&tag=${selectedTag.join()}` : ''
    }`;
    router.push('/list' + query);
  };

  useEffect(() => {
    !tagList && dispatch(tagListRequest());
    const { abvMin, abvMax, name, tag, base } = parseQuery(
      router.pathname === '/list' ? router.query : {}
    );
    setDisplayFlag({
      tag: false,
      search: router.pathname === '/list',
      filter: router.pathname === '/list',
    });
    setAbvValues([abvMin, abvMax]);
    setInputValue(name);
    selectTag(tag);
    selectBaseTag(base);
  }, [router.pathname, router.query]);

  return (
    <HeaderContainer {...theme}>
      <div className='fixed_div'>
        <Link href='/'>
          <img className='logo' src='/logo.png' alt='메인페이지로 이동' />
        </Link>
        <form
          onSubmit={handleSubmit}
          className={`input_form ${displayFlag.search ? 'block' : 'none'}`}
          action=''
        >
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='칵테일명...'
            name='cocktail'
            className='input_text'
            type='text'
          />
          <img
            onClick={() =>
              setDisplayFlag({ ...displayFlag, filter: !displayFlag.filter })
            }
            className='filter_img'
            src={displayFlag.filter ? '/selected_filter.svg' : '/filter.svg'}
            alt='필터설정'
          />
        </form>
        <div className={`title ${displayFlag.search ? 'none' : 'block'}`}>
          칵텐더
        </div>
        <img
          onClick={handleSubmit}
          className='search_logo'
          src='/search.png'
          alt='검색하기'
        />
      </div>
      <div className={`filter_div ${displayFlag.filter ? 'block' : 'none'}`}>
        <div className='row'>
          <span className='type'>도수%</span>
          <span className='range-value'>{abvValues[0]}</span>
          <Slider
            step={1}
            max={40}
            value={abvValues}
            onChange={(e) =>
              setAbvValues(typeof e.value === 'number' ? [0, 40] : e.value)
            }
            range={true}
          />
          <span className='range-value'>
            {abvValues[1] === 40 ? '40+' : abvValues[1]}
          </span>
        </div>
        <div className='row'>
          <span className='type'>베이스</span>
          <div className='tag-list'>
            {baseTagStyleList.map((tag, i) => {
              const params = {
                textColor: selectedBaseTag.includes(i) ? undefined : '#aeaeae',
                borderColor: selectedBaseTag.includes(i)
                  ? tag.borderColor
                  : '#aeaeae',
                backgroundColor: selectedBaseTag.includes(i)
                  ? tag.backgroundColor
                  : '#fff',
                name: tag.name,
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
            {tagList &&
              selectedTag.map((tagIdx) => (
                <Tag
                  onClickHandler={(e) => {
                    e.preventDefault();
                    selectTag([...selectedTag.filter((idx) => idx !== tagIdx)]);
                  }}
                  name={tagList[tagIdx].name}
                  fontSize={12}
                  key={tagIdx}
                />
              ))}
          </div>
          <img
            onClick={() =>
              setDisplayFlag({ ...displayFlag, tag: !displayFlag.tag })
            }
            className='arrow'
            src={displayFlag.tag ? '/up-arrow.svg' : '/down-arrow.svg'}
            alt='전체태그 접기/펴기'
          />
        </div>
        <div className={`all-tag ${displayFlag.tag ? 'block' : 'none'}`}>
          {tagList &&
            tagList.map((tag, i) => (
              <Tag
                onClickHandler={(e) => {
                  e.preventDefault();
                  selectTag(
                    selectedTag.includes(tag.idx)
                      ? [...selectedTag.filter((idx) => idx !== tag.idx)]
                      : [...selectedTag, tag.idx]
                  );
                }}
                name={tag.name}
                fontSize={12}
                backgroundColor={selectedTag.includes(i) ? undefined : '#fff'}
                textColor={selectedTag.includes(i) ? undefined : '#aeaeae'}
                borderColor={selectedTag.includes(i) ? undefined : '#aeaeae'}
                key={i}
              />
            ))}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
