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
function mappedTools(p) {
  return {
    type: NavbarTypes.mapTools,
    payload: p,
  };
}

export { catalogOpen, mappedCatalog, mappedTools };
