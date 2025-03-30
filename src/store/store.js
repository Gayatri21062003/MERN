import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "../redux/FirstReducer";

const store = configureStore({
    reducer: {
        firstreducer: NumberSlice,
    },
});
export default store;
