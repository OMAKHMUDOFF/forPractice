import { HomeTypes } from "./ActionTypes";

function chooseCategory(p) {
  return {
    type: HomeTypes.category,
    payload: p,
  };
}

export { chooseCategory };
