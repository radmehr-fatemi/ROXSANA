import { configureStore } from "@reduxjs/toolkit";

//Reducer
import productsReducer from "@/redux/features/products/productsSlice";
import cartReducer from "@/redux/features/cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
})

export default store