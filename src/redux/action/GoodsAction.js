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

function setCategory(p) {
  return {
    type: GoodsTypes.setCategoryArr,
    payload: p,
  };
}

function delCategory(p) {
  return {
    type: GoodsTypes.delCategoryArr,
    payload: p,
  };
}

function getColorType(p) {
  return {
    type: GoodsTypes.setColorType,
    payload: p,
  };
}

function setBrandCategory(p) {
  return {
    type: GoodsTypes.setBrandCategory,
    payload: p,
  };
}

function changePriceValue(p) {
  return {
    type: GoodsTypes.changePriceValue,
    payload: p,
  };
}

function handleRangeValue(p) {
  return {
    type: GoodsTypes.handleRangeValue,
    payload: p,
  };
}

export {
  changeFiltersBool,
  setCheckBool,
  setGoodsLike,
  setSliceCount,
  setCategory,
  delCategory,
  getColorType,
  setBrandCategory,
  changePriceValue,
  handleRangeValue,
};
