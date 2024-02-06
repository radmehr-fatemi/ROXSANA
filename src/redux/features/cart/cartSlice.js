"use client"

const { createSlice } = require("@reduxjs/toolkit");

//function
import { totalCounter } from "@/utils/functions";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    totalDiscount: 0,
    payable: 0,
    checkout: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        ADD_ITEMS: (state, action) => {
            if (!state.selectedItems.some(i => action.payload.id === i.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    qty: 1
                })

            } else if (state.selectedItems.some(i => action.payload.id === i.id)) {
                const indexI = state.selectedItems.findIndex(i => i.id === action.payload.id);
                if (action.payload.stock > state.selectedItems[indexI].qty) {
                    state.selectedItems[indexI].qty++
                    state.checkout = false
                }
            }

            state.checkout = false
            state.itemsCounter = totalCounter(state.selectedItems).itemsCounter
            state.total = totalCounter(state.selectedItems).total
            state.totalDiscount = totalCounter(state.selectedItems).totalDiscount
            state.payable = totalCounter(state.selectedItems).payable
        },

        INCREMENT: (state, action) => {
            if (state.selectedItems.some(i => i.id === action.payload.id)) {
                const indexI = state.selectedItems.findIndex(i => i.id === action.payload.id);
                if (action.payload.stock > state.selectedItems[indexI].qty) {
                    state.selectedItems[indexI].qty++
                }
                state.checkout = false
                state.itemsCounter = totalCounter(state.selectedItems).itemsCounter
                state.total = totalCounter(state.selectedItems).total
                state.totalDiscount = totalCounter(state.selectedItems).totalDiscount
                state.payable = totalCounter(state.selectedItems).payable
            }
        },

        DECREMENT: (state, action) => {
            if (state.selectedItems.some(i => i.id === action.payload.id)) {
                const indexD = state.selectedItems.findIndex(i => i.id === action.payload.id);
                if (state.selectedItems[indexD].qty > 0) {
                    state.selectedItems[indexD].qty--
                }
                state.checkout = false
                state.itemsCounter = totalCounter(state.selectedItems).itemsCounter
                state.total = totalCounter(state.selectedItems).total
                state.totalDiscount = totalCounter(state.selectedItems).totalDiscount
                state.payable = totalCounter(state.selectedItems).payable
            }
        },

        REMOVE_ITEM: (state, action) => {
            if (state.selectedItems.some(i => i.id === action.payload.id)) {
                const indexR = state.selectedItems.findIndex(i => i.id === action.payload.id);
                state.selectedItems.splice(indexR, 1)
            }
            state.checkout = false
            state.itemsCounter = totalCounter(state.selectedItems).itemsCounter
            state.total = totalCounter(state.selectedItems).total
            state.totalDiscount = totalCounter(state.selectedItems).totalDiscount
            state.payable = totalCounter(state.selectedItems).payable
        },

        CLEAR: (state) => {
            state.checkout = false
            state.itemsCounter = 0
            state.payable = 0
            state.selectedItems = []
            state.total = 0
            state.totalDiscount = 0
        },

        CHECKOUT: (state) => {
            state.checkout = true
            state.itemsCounter = 0
            state.payable = 0
            state.selectedItems = []
            state.total = 0
            state.totalDiscount = 0
        }
    }
})

export default cartSlice.reducer;
export const { ADD_ITEMS, INCREMENT, CHECKOUT, CLEAR, DECREMENT, REMOVE_ITEM } = cartSlice.actions;