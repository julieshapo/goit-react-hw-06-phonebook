import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { GlobalStyle } from '../src/components/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: '#707070',
    lightGray: '#f3f4f3',
    accent: 'tomato',
    green: 'green',
    red: 'orangeRed',
    lightBlue: '#14acdf',
    error: 'red',
    orange: '#ff7628',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
