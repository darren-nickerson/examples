import { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "./reducers/postReducer";
import { ACTION_TYPES } from "./reducers/postActionTypes";

export const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };
  return (
    <div>
      <button onClick={handleFetch}> Fetch The Post</button>
      {state.loading && <p>Loading...</p>}
      <p>{state.posts?.title}</p>
      <span>{state.error && "Something went wrong"}</span>
    </div>
  );
};
