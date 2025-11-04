import { configureStore } from "@reduxjs/toolkit"
import hotelInfoReducer from "../features/hotelInfo.js"
import userReducer from "../features/userSlice.js"

const hotelInfoStore = configureStore({
    reducer: {
        user: userReducer,
        hotelInfo: hotelInfoReducer
},
})

export default hotelInfoStore