import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { Sliders } from './sliders/Sliders';

export const App = () => {
  return (
    <Provider store={store}>
      <Sliders />
    </Provider>
  );
};
