import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//     jobs: [
//         { position: "Frontend Developer", company: "Cubix", dateApplied: "12-Aug-2024", location:'KHI', hrProfile:"https://www.google.com", followUp: "Date", status: "Applied", description: "lorem ipsum blah blah blah", jobUrl: "https://www.google.com" },
//             { position: "Frontend Developer", company: "Cubix", dateApplied: "12-Aug-2024", location: 'LHR', hrProfile:"https://www.google.com", followUp: "Date", status: "Applied", description: "lorem ipsum blah blah blah", jobUrl: "https://www.google.com" },
//     ]
// }


// const jobSlice = createSlice({
//     name: 'jobs',
//     initialState,
//     reducers: {
//         addJob: (state, action) => {
//             state.jobs.push(action.payload);
//         }
//     }
// })

const initialState = {
    loading: false,
    job: [],
    error: ''
}

export const fetchJobs = createAsyncThunk('job/fetchJobs',async () => {
    const response = await fetch('http://localhost:8000/jobs')
    if(!response.ok) {
        throw new Error('Response not OK')
    }
    const data = await response.json();

    return data;
})

//Adding Job

export const addJob = createAsyncThunk('job/addJob', async (newJob) => {
    const response = await fetch('http://localhost:8000/jobs', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newJob)
    })
    if (!response.ok) {
        throw new Error('Failed to add job');
      }
      const data = await response.json();
      return data;
})



const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchJobs.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.loading = false;
            state.job = action.payload;
            state.error = '';
        })
        builder.addCase(fetchJobs.rejected, (state, action) => {
            state.loading = false;
            state.job = [];
            state.error = action.error.message
        })
        builder.addCase(addJob.pending, (state) => {
            state.loading = true
        });
        builder.addCase(addJob.fulfilled, (state, action) => {
            state.loading = false;
            state.job = action.payload;
            state.error = '';
        })
        builder.addCase(addJob.rejected, (state, action) => {
            state.loading = false;
            state.job = [];
            state.error = action.error.message
        })
    }
})



export default jobSlice.reducer