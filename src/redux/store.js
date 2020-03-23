import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { result } from './reducer';

const rootReducer = combineReducers({
  result
});

export const store = createStore(rootReducer, devToolsEnhancer());
