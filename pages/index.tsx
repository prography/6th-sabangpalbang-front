import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../reducers';
import { request } from '../reducers/test';

interface IProps {}

const StyledBlock = styled.div`
  color: red;
  background-color: lightcyan;
`;

const IndexPage = (props: IProps) => {
  const dispatch = useDispatch();
  const { value, loading } = useSelector((state: RootState) => state.test);

  const handle = useCallback(() => {
    dispatch(request());
  }, []);

  return (
    <>
      {loading && <p>loading...</p>}
      <StyledBlock>{value}</StyledBlock>
      <button onClick={handle}>버튼</button>
    </>
  );
};

export default IndexPage;
