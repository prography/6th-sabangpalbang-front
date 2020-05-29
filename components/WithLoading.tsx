import Loading from 'react-spinners/PulseLoader';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const WithLoading = (height: number) => (Component: any) => (props: any) => {
  const isLoading = !!props.loading;

  return (
    <>
      <Component {...props} />
      {isLoading && (
        <div style={{ ...style, height: `${height}px` }}>
          <Loading size={10} color={'#000'} loading={true} />
        </div>
      )}
    </>
  );
};

export default WithLoading;
