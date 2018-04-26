import { combineReducers } from 'redux';

import communication from './communication';
import posts from './posts';

const appReducer = combineReducers({
  communication,
  posts,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
