import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/redux/features/products/productsSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})

export default store