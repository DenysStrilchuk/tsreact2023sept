import {configureStore} from "@reduxjs/toolkit";
import {authReducer, carReducer, loadingReducer} from "./slices";

const store = configureStore({
    reducer:{
        loadingReducer,
        auth: authReducer,
        cars: carReducer
    }
})

export {
    store
}