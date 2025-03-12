import { configureStore } from "@reduxjs/toolkit";
import userReducer from './modules/user'
import adviceReducer from './modules/advice'

configureStore({
    reducer: {
        user: userReducer
        advice: adviceReducer
    }
})
