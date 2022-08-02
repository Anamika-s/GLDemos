import { applyMiddleware, legacy_createStore } from "redux"
import reducers from "./reducers/combineAlllReducers"
import thunk from "redux-thunk";
const store = legacy_createStore(reducers , {} , applyMiddleware(thunk))

console.log(store.getState());
export default store;
