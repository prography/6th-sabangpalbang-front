import 'swiper/css/swiper.css';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import jwtDecode from 'jwt-decode';

import Header from '../components/Header';
import { globalStyle, resetCSS, theme } from '../config/style';
import rootEpic from '../src/epics';
import rootReducer from '../src/reducers';
import { useEffect } from 'react';
import { checkSession } from '../src/reducers/user';
import { initGA, logPageView } from "../src/lib/analytics";

interface IProps extends AppProps {
  store: Store;
}

const ResetCSS = createGlobalStyle`${resetCSS}`;
const GlobalStyle = createGlobalStyle`${globalStyle}`;

const App = ({ store, Component, pageProps }: IProps) => {
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userInfo = userToken && jwtDecode(userToken);
    if(userInfo) {
      store.dispatch(checkSession(userInfo));
    }
  }, []);
  useEffect(() => {
    if (!window["GA_INITIALIZED"]) {
      initGA();
      window["GA_INITIALIZED"] = true;
    }
    logPageView()
  }, [Component]);

  return (
    <Provider store={store}>
      <Head>
        <title>칵텐더</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

App.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  
  if (ctx.isServer && !state.user.userInfo.email) {
    const cookies = ctx.req.headers.cookie &&
      ctx.req.headers.cookie.split('; ').map(v => v.split('='))
        .reduce((acc, [key, value]) => ({...acc, [key]: value }), {});

    if(cookies && cookies.userToken) {
      const sessionData = jwtDecode(cookies.userToken).data;
      ctx.store.dispatch(checkSession(sessionData));
    }
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  return { pageProps };
};

export default withRedux((initialState, options) => {
  const epicMiddleware = createEpicMiddleware();

  const middlewares: Middleware[] = [epicMiddleware];
  const enhancer =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(rootEpic);
  return store;
})(App);
