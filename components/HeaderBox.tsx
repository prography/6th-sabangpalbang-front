import styled from 'styled-components';
import Header from './Header';
import TopNavigation from './TopNavigation';

const FixedDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
`;

interface IProps {
  display: string;
  page: number;
} // scroll?값에따라 Header숨기기, 무슨 페이지인지

const HeaderBox = ({ display, page }: IProps) => {
  return (
    <FixedDiv>
      <Header display={display} />
      <TopNavigation page={page} />
    </FixedDiv>
  );
};

export default HeaderBox;
