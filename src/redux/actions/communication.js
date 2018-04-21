import * as CommunicationActionType from '../actiontypes/communication';

export const updateNotification = payload => ({
  type: CommunicationActionType.UPDATE_NOTIFICATION,
  payload,
});

export const incrementLoadingStatus = () => ({
  type: CommunicationActionType.INCREMENT_LOADING_STATUS,
});

export const decrementLoadingStatus = () => ({
  type: CommunicationActionType.DECREMENT_LOADING_STATUS,
});

export function dispatchUpdateNotification(notification) {
  return (dispatch) => {
    dispatch(updateNotification(notification));
  };
}

export function startLoading() {
  return (dispatch) => {
    dispatch(incrementLoadingStatus());
  };
}

export function finishLoading() {
  return (dispatch) => {
    dispatch(decrementLoadingStatus());
  };
}
