import { combineReducers } from "redux";
import FavoritesRedux from "./FavoritesRedux";
import GoodsRedux from "./GoodsRedux";
import HomeRedux from "./HomeRedux";
import NavbarRedux from "./NavbarRedux";
import TotalRedux from "./TotalRedux";
const RootRedux = combineReducers({
  HomeRedux,
  NavbarRedux,
  FavoritesRedux,
  GoodsRedux,
  TotalRedux,
});

export default RootRedux;
