import { combineReducers } from "redux";
import HomeRedux from "./HomeRedux";
import NavbarRedux from "./NavbarRedux";
const RootRedux = combineReducers({
  HomeRedux,
  NavbarRedux,
});

export default RootRedux;
