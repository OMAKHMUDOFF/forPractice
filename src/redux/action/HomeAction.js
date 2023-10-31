import { HomeTypes } from "./ActionTypes";

function chooseCategory1(p) {
  return {
    type: HomeTypes.category,
    payload: p,
  };
}
function chooseCategory2(p) {
  return {
    type: HomeTypes.category,
    payload: p,
  };
}

function setLike(p) {
  return {
    type: HomeTypes.like,
    payload: p,
  };
}

export { chooseCategory1, setLike, chooseCategory2 };
