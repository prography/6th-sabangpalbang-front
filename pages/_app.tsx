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
import 'swiper/css/swiper.css';

import rootEpic from '../epics';
import rootReducer from '../reducers';

interface IProps extends AppProps {
  store: Store;
}

const ResetCSS = createGlobalStyle`
::-webkit-scrollbar{-webkit-appearance:none; display:none}
::-webkit-scrollbar:vertical{width:0}
::-webkit-scrollbar:horizontal{height:0}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track{background-color:transparent}

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
const theme = {
  themeColor: '#FF306F',
  secondThemeColor: '#FF6C26',
  primaryTextColor: '#121212',
  secondTextColor: '#7E7E7E',
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  letter-spacing: normal;
}
body{
  background-color:#E0E0E0;
}
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
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyle />
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
