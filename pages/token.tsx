import { useEffect } from "react";
import Router from "next/router";
import jwtDecode from 'jwt-decode';
import { checkSession } from "../src/reducers/user";
import { useDispatch } from "react-redux";

const Token = ({ userToken }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('userToken', userToken);
    const sessionData = jwtDecode(userToken);
    dispatch(checkSession(sessionData.data));
    Router.push('/');
  }, []);

  return null;
}

Token.getInitialProps = async (ctx) => {
  const query = ctx.query;
  const userToken = query && query.accessToken;
  const pageProps = { userToken: null };

  if(ctx.isServer && userToken) {
    pageProps.userToken = userToken;
  }

  return pageProps;
}

export default Token;