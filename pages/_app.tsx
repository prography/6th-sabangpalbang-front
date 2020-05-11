import withRedux from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { createGlobalStyle } from 'styled-components';

import rootEpic from '../epics';
import rootReducer from '../reducers';

interface IProps extends AppProps {
  store: Store;
}

const ResetCSS = createGlobalStyle`
html,body,div,span,h1,h2,h3,h4,h5,h6,p,blockquote,pre,
a,abbr,address,cite,code,
del,em,img,ins,q,strong,i
dl,dt,dd,ol,ul,li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    font: inherit;
    vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol,ul {
    list-style: none;
}

blockquote,q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

const GlobalStyle = createGlobalStyle`
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  color:#00A0C6; 
  text-decoration:none; 
  cursor:pointer;  
}
`;

const App = ({ store, Component, pageProps }: IProps) => {
  return (
    <Provider store={store}>
      <ResetCSS />
      <GlobalStyle />
      <Component {...pageProps} />
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
