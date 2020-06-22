import Loading from 'react-spinners/PulseLoader';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const WithLoading = (Component: any) => (props: any) => {
  const isLoading = !!props.loading;

  return (
    <>
      <Component {...props} />
      {isLoading && <LoadingWrapper>
        <Loading size={10} color={'#000'} loading={isLoading} />
      </LoadingWrapper>}
    </>
  );
};

export default WithLoading;
