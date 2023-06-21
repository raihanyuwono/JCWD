import { createSlice } from "@reduxjs/toolkit"

/*
    data : img, productName, price
*/

const initialState = {
    cartList : [],
    total : 0,
    counter : 0,
}

function findMatch(item, data){
    return item.productName === data.productName;
}

export const CounterCart = createSlice({
    name: "CounterCart",
    initialState,
    reducers: {
        addItem: (state, data) => {
            const payload = data.payload;
            let index = state.cartList.findIndex((item) => findMatch(item, payload))
            if(index == -1 ){
                payload.qty = 1;
                state.cartList.push(payload);
            } else {
                state.cartList[index].qty++;
            }
            state.total += payload.price;
            state.counter++;
        },
        removeItem: (state, data) => {
            const payload = data.payload;
            let index = state.cartList.findIndex((item) => findMatch(item, payload));
        },
    }
});

export const {addItem, removeItem} = CounterCart.actions;
export default CounterCart.reducer;