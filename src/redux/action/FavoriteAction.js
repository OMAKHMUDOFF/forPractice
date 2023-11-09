import { FavoriteTypes } from "./ActionTypes";

function favoriteCategory(p) {
  return {
    type: FavoriteTypes.setCategory,
    payload: p,
  };
}

function getData(p) {
  return {
    type: FavoriteTypes.setData,
    payload: p,
  };
}

export { favoriteCategory, getData };

