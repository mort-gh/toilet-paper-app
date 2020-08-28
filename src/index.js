import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-156511211-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
