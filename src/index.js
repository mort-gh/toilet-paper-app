import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import ReactGA from 'react-ga';
import { YMInitializer } from 'react-yandex-metrika';

ReactGA.initialize('UA-156511211-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const app = (
  <React.StrictMode>
    <App />
    <YMInitializer accounts={[61238926]} />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
