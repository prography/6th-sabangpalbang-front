import Loading from 'react-spinners/PulseLoader';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const WithLoading = (loadingProp: string, height: number) => (
  Component: any
) => (props: any) => {
  const isLoading = props[loadingProp] === null;

  if (isLoading)
    return (
      <div style={{ ...style, height: `${height}px` }}>
        <Loading size={10} color={'#000'} loading={true} />
      </div>
    );

  return <Component {...props} />;
};

export default WithLoading;
