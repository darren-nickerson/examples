export const INITIAL_STATE = {
  loading: false,
  posts: {},
  error: null,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: false,
        posts: {},
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        posts: {},
      };
    default:
      return state;
  }
};
