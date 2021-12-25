import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyContextProvider } from './components/userContext'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary>
      <MyContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MyContextProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
