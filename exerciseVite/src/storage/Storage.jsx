import { configureStore } from "@reduxjs/toolkit";
import CounterCart  from "./CounterCart";

export const storage = configureStore({
    reducer: {
        CounterCart: CounterCart,
    }
})