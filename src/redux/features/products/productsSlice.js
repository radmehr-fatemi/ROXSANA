"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const fetchProducts = createAsyncThunk("products/fetchProducts", ({ id = 1, search = "", category = "smartphons" }) => {
    return axios.all([
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/search?q=${search}`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/${category}`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/comments`),
    ])
        .then(axios.spread((products, product, searched, categories, categoryData, comments) => {
            return {
                products: products.data.products,
                product: product.data,
                searched: searched.data.products,
                categories: categories.data,
                categoryData: categoryData.data.products,
                comments: comments.data.comments
            }
        }))
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: builder => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        })
    }
})

export default productsSlice.reducer;
export { fetchProducts } 