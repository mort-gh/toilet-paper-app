import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { slider } from './reducer';

const rootReducer = combineReducers({
  slider
});

export const store = createStore(rootReducer, devToolsEnhancer());
