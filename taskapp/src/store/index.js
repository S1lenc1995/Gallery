import { configureStore } from '@reduxjs/toolkit';
import {
    paintingsReducer
} from "../reducers"

const store = configureStore({
    reducer:{
        paintings: paintingsReducer,
    }
})

export default store;