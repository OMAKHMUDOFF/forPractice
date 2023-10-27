import { createStore } from "redux";
import RootRedux from "./redux/reducers/RootRedux";

const Store = createStore(RootRedux);
export default Store;
