import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"
//TanKiet
const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    }
});
export default store;
