import { HomeTypes } from "./ActionTypes";

function setLike(p) {
  return {
    type: HomeTypes.like,
    payload: p,
  };
}

export { setLike };
