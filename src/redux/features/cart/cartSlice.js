"use client"

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
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
                state.checkout = false
            } else if (state.selectedItems.some(i => action.payload.id === i.id)) {
                const indexI = state.selectedItems.findIndex(i => i.id === action.payload.id);
                if (action.payload.stock > state.selectedItems[indexI].qty) {
                    state.selectedItems[indexI].qty++
                }
            }
        },

        INCREMENT: (state, action) => {
            if (state.selectedItems.some(i => i.id === action.payload.id)) {
                const indexI = state.selectedItems.findIndex(i => i.id === action.payload.id);
                if (action.payload.stock > state.selectedItems[indexI].qty) {
                    state.selectedItems[indexI].qty++
                }
            }
        },

        DECREMENT: (state, action) => {
            if (state.selectedItems.some(i => i.id === action.payload.id)) {
                const indexD = state.selectedItems.findIndex(i => i.id === action.payload.id);
                if (state.selectedItems[indexD].qty > 0) {
                    state.selectedItems[indexD].qty--
                }
            }
        },

        REMOVE_ITEM: (state, action) => {
            if (state.selectedItems.some(i => i.id === action.payload.id)) {
                const indexR = state.selectedItems.findIndex(i => i.id === action.payload.id);
                state.selectedItems.splice(indexR, 1)
            }
        },

        CLEAR: (state) => {
            state = {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            }
        },

        CHECKOUT: (state) => {
            state = {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }
        }

    }
})

export default cartSlice.reducer;
export const { ADD_ITEMS, INCREMENT, CHECKOUT, CLEAR, DECREMENT, REMOVE_ITEM } = cartSlice.actions;