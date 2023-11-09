import { TotalTypes } from "./ActionTypes";

function setTotalLike(p) {
  return {
    type: TotalTypes.totalLike,
    payload: p,
  };
}

function chooseCategory1(p) {
  return {
    type: TotalTypes.category,
    payload: p,
  };
}
function chooseCategory2(p) {
  return {
    type: TotalTypes.category,
    payload: p,
  };
}

export { chooseCategory1, chooseCategory2, setTotalLike };
