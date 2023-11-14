import { configureStore } from "@reduxjs/toolkit";
import userDetail  from "../features/userDetailSilce";

export const Store=configureStore({
    reducer:{
        app:userDetail,
    },
})