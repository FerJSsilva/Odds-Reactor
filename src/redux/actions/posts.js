import * as actionType from '../actiontypes/posts';
import * as dataSource from '../../dataSource/requests';
import { startLoading, finishLoading } from './communication';

const GET_POSTS_URL = '/posts';

export const updatePosts = posts => ({
  type: actionType.UPDATE_POSTS,
  payload: posts,
});

export function fetchPosts(id) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const posts = await dataSource.get(GET_POSTS_URL, id);
      dispatch(finishLoading());
      dispatch(updatePosts(posts));
    } catch (exception) {
      console.error(`actions/fetchPosts -> ${exception}`);
      dispatch(finishLoading());
    }
  };
}
