import { combineReducers } from "redux";
import HomeRedux from "./HomeRedux";
import NavbarRedux from "./NavbarRedux";
import FavoritesRedux from "./FavoritesRedux";
import GoodsRedux from "./GoodsRedux";
const RootRedux = combineReducers({
  HomeRedux,
  NavbarRedux,
  FavoritesRedux,
  GoodsRedux,
});

export default RootRedux;
