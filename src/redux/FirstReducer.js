import {createSlice} from "@reduxjs/toolkit";
import {act} from "@testing-library/react";
import React from "react";
const initialState = {
    value: 0,

    userInfo: [],
};
const FirstReducer = createSlice({
    name: "firstreducer",
    initialState,
    reducers: {
        incrementNumber: (state, action) => {
            state.value = state.value + action.payload;
        },
        decrementNumber: (state, action) => {
            state.value = state.value - action.payload;
        },
        addUsers: (state, action) => {
            state = state.userInfo.push(action.payload);
        },
    },
});

const {reducer, actions} = FirstReducer;

export const {incrementNumber, decrementNumber, addUsers} = actions;

export default reducer;
