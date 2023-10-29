import { NavbarTypes } from "./ActionTypes";

function catalogOpen() {
  return {
    type: NavbarTypes.catalog,
  };
}

function mappedCatalog(p) {
  return {
    type: NavbarTypes.mapCatalog,
    payload: p,
  };
}

export { catalogOpen, mappedCatalog };
