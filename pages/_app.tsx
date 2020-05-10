import withRedux from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../epics';
import rootReducer from '../reducers';

interface IProps extends AppProps {
  store: Store;
}

const App = ({ store, Component, pageProps }: IProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux((initialState, options) => {
  const epicMiddleware = createEpicMiddleware();

  const middlewares: Middleware[] = [epicMiddleware];
  const enhancer =
    process.env.NODE_ENV !== "production"
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(rootEpic);
  return store;
})(App);
