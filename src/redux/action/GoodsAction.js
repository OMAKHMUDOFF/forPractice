import { GoodsTypes } from "./ActionTypes";

function changeFiltersBool(p) {
  return {
    type: GoodsTypes.catalogOpen,
    payload: p,
  };
}

function setCheckBool(p) {
  return {
    type: GoodsTypes.checkBool,
    payload: p,
  };
}

export { changeFiltersBool, setCheckBool };
