import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [
        { position: "Frontend Developer", company: "Cubix", dateApplied: "12-Aug-2024", location:'KHI', hrProfile:"https://www.google.com", followUp: "Date", status: "Applied", description: "lorem ipsum blah blah blah", jobUrl: "https://www.google.com" },
            { position: "Frontend Developer", company: "Cubix", dateApplied: "12-Aug-2024", location: 'LHR', hrProfile:"https://www.google.com", followUp: "Date", status: "Applied", description: "lorem ipsum blah blah blah", jobUrl: "https://www.google.com" },
    ]
}


const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        }
    }
})

export default jobSlice.reducer
export const {addJob} = jobSlice.actions