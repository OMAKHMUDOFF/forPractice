import { NavbarTypes } from "./ActionTypes";

function catalogOpen(p) {
  return {
    type: NavbarTypes.catalog,
    payload: p,
  };
}

export { catalogOpen };
