import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../views/jobs/jobSlice'



const store = configureStore({
    reducer: {
        job: jobReducer
    }
})



export default store;