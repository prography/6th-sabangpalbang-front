import styled from 'styled-components';

interface IProps {}

const StyledBlock = styled.div`
  color: red;
  background-color: lightcyan;
`;

const IndexPage = (props: IProps) => {
  return <StyledBlock>Hello World!</StyledBlock>;
};

export default IndexPage;
