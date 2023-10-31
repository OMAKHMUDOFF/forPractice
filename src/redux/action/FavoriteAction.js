import { FavoriteTypes } from "./ActionTypes";

function favoriteCategory(p) {
  return {
    type: FavoriteTypes.setCategory,
    payload: p,
  };
}

function clearList(p) {
  return {
    type: FavoriteTypes.clearList,
    payload: p,
  };
}

function getData(p) {
  return {
    type: FavoriteTypes.setData,
    payload: p,
  };
}

export { favoriteCategory, clearList, getData };
