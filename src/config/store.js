import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Login/LoginSlice";


export const store = configureStore({
    reducer : {
        login : LoginSlice,
    }

})