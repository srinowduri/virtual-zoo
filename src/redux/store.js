import { configureStore } from "@reduxjs/toolkit";
import animalReducer from './animalSlice';

const store = configureStore({
    reducer : {
        animals: animalReducer,
    },
});

export default store;