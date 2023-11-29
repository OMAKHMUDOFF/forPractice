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

function setGoodsLike(p) {
  return {
    type: GoodsTypes.like,
    payload: p,
  };
}

function setSliceCount(p) {
  return {
    type: GoodsTypes.setSliceCount,
    payload: p,
  };
}

export { changeFiltersBool, setCheckBool, setGoodsLike, setSliceCount };
