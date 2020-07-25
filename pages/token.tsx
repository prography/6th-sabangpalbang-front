import { useEffect } from "react";
import Router from "next/router";

const Token = ({ userToken }) => {
  useEffect(() => {
    localStorage.setItem('userToken', userToken);
    Router.push('/');
  }, []);

  return null;
}

Token.getInitialProps = async (ctx) => {
  const query = ctx.query;
  const userToken = query && query.accessToken;
  const pageProps = { userToken: null };
  
  if(!ctx.isServer) {
    localStorage.setItem('userToken', userToken);
    Router.push('/');
  }

  if(ctx.isServer && userToken) {
    pageProps.userToken = userToken;
  }

  return pageProps;
}

export default Token;