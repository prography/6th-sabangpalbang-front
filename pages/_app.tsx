import 'swiper/css/swiper.css';

import withRedux from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import rootEpic from '../epics';
import rootReducer from '../reducers';
import { globalStyle, resetCSS, theme } from '../style';

interface IProps extends AppProps {
  store: Store;
}

const ResetCSS = createGlobalStyle`${resetCSS}`;
const GlobalStyle = createGlobalStyle`${globalStyle}`;

const App = ({ store, Component, pageProps }: IProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
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
