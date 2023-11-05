import { GoodsTypes } from "./ActionTypes";

function changeFiltersBool(p) {
  return {
    type: GoodsTypes.catalogOpen,
    payload: p,
  };
}

export { changeFiltersBool };
