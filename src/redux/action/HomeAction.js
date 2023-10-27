import { HomeTypes } from "./ActionTypes";

function chooseCategory1(p) {
  return {
    type: HomeTypes.category,
    payload: p,
  };
}

export { chooseCategory1 };
