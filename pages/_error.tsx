import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  min-height: 100vh;
  padding-bottom: 40px;
  background-color: #b5b5b5;
  font-size: 32px;
  img {
    width: 100%;
  }
`;

const ErrorPage = ({ statusCode }) => {
  return (
    <StyledDiv>
      <img src='/jordy.jpg' alt='죠르디이미지' />
      아직 준비중이에요ㅎㅎ..
    </StyledDiv>
  );
};

export default ErrorPage;
