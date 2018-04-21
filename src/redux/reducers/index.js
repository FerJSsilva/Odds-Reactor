import { combineReducers } from 'redux';

import communication from './communication';


const appReducer = combineReducers({
  communication,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
