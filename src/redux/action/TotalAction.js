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

function answerOpen(p) {
  return {
    type: TotalTypes.openAns,
    payload: p,
  };
}

function setTotalCart(p) {
  return {
    type: TotalTypes.setCart,
    payload: p,
  };
}

export {
  answerOpen,
  chooseCategory1,
  chooseCategory2,
  setTotalLike,
  setTotalCart,
};
