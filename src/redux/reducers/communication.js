import * as CommunicationActionType from '../actiontypes/communication';

const INITIAL_STATE = {
  notification: {
    type: undefined,
    message: undefined,
    description: undefined,
  },
  loading: 0,
};

export default function communication(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CommunicationActionType.UPDATE_NOTIFICATION: {
      const newState = {
        ...state,
        notification: action.payload,
      };
      return newState;
    }

    case CommunicationActionType.INCREMENT_LOADING_STATUS: {
      const newState = {
        ...state,
        loading: state.loading + 1,
      };
      return newState;
    }

    case CommunicationActionType.DECREMENT_LOADING_STATUS: {
      let newState;

      if (state.loading > 0) {
        newState = {
          ...state,
          loading: state.loading - 1,
        };
      } else {
        newState = {
          ...state,
          loading: 0,
        };
      }

      return newState;
    }

    default:
      return state;
  }
}
