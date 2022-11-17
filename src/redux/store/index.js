import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slice/todoAddSlice'

const store = configureStore({
    reducer:{
        todoReducers:todoReducer,
        
    }
}) 

export default store