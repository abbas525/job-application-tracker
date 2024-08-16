import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    jobs: 0,
    error: ''
}


const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs += action.payload
        }
    }
})

export default jobSlice.reducer
export const {addJob} = jobSlice.actions