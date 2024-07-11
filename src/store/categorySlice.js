import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {BASE_URL} from "../db.json";
import {STATUS} from "../utils/status";

const initialState = {
    categoriesList: [],
    categoriesStatus: STATUS.IDLE,
    categoryProduct: [],
    categoryProductStatus: STATUS.IDLE
}
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncCategories.pending,(state,action) => {
                state.categoriesStatus = STATUS.LOADING;

            })
    }
});

export  const fetchAsyncCategories = createAsyncThunk('categories/fetch',async ()=>{
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    return data;
});
export const getAllCategories = (state) => state.category.categories;
export default categorySlice.reducer;
