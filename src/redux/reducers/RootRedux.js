import { combineReducers } from "redux";
import HomeRedux from "./HomeRedux";
import NavbarRedux from "./NavbarRedux";
import FavoritesRedux from "./FavoritesRedux";
const RootRedux = combineReducers({
  HomeRedux,
  NavbarRedux,
  FavoritesRedux,
});

export default RootRedux;
