import { combineReducers } from "redux";
import ContactsRedux from "./ContactsRedux";
import FavoritesRedux from "./FavoritesRedux";
import GoodsRedux from "./GoodsRedux";
import HomeRedux from "./HomeRedux";
import NavbarRedux from "./NavbarRedux";
import NewsRedux from "./NewsRedux";
import TotalRedux from "./TotalRedux";

const RootRedux = combineReducers({
  HomeRedux,
  NavbarRedux,
  FavoritesRedux,
  GoodsRedux,
  TotalRedux,
  ContactsRedux,
  NewsRedux,
});

export default RootRedux;
