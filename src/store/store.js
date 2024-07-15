import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"
import categoryReducer from "./categorySlice"
import productReducer from "./productSlice"
//TanKiet
const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
        product: productReducer
    }
});
export default store;
