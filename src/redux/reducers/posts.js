import * as actionType from '../actiontypes/posts';

const INITIAL_STATE = {
  ids: [],
  content: {},
};

/**
* @description Create a normalized Object from an array
* @param {array} list A simple array which will be normalized
* @returns {Object} Normalized object and a list of ids as reference
* @see {@link https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape|Normalize}
*/
function normalize(list) {
  const ids = [];
  const content = {};

  list.forEach((item) => {
    ids.push(item.id);
    content[item.id] = item;
  });

  return {
    ids,
    content,
  };
}

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.UPDATE_POSTS: {
      return normalize(action.payload);
    }

    default:
      return state;
  }
}
