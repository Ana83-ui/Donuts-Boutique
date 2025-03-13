import { combineReducers } from "redux";
import { listComponentReducer } from "../../../components/ListComponent/ListComponentReducer";
import { inputComponentReducer } from "../../../components/InputComponent/InputComponentReducer";
import { menuComponentReducer } from "../../../components/MenuComponent/MenuComponentReducer";

const reducers = combineReducers({
  listComponentReducer,
  inputComponentReducer,
  menuComponentReducer,
});

export default reducers;
