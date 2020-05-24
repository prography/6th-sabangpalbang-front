const WithLoading = (loadingProp: string, height: number) => (
  Component: any
) => (props: any) => {
  if (props[loadingProp] === null)
    return (
      <div style={{ height: `${height}px` }}>
        <img
          style={{ display: 'block', width: '100%', height: '100%' }}
          src='loading.gif'
        />
      </div>
    );
  return <Component {...props} />;
};

export default WithLoading;
