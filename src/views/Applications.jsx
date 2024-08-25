import JobTable from "../components/applicationTable/JobTable";
import { useSelector, useDispatch } from "react-redux";
import { addJob,fetchJobs } from "./jobs/jobSlice";
import FilterJobs from "../components/forms/FilterJobs";
import { useState,useEffect } from "react";

const Applications = () => {

const jobData = useSelector((state) => state.job)


const dispatch = useDispatch();

useEffect(() => {
  // Dispatch the fetchJobs action when the component mounts
  dispatch(fetchJobs());
}, [dispatch]);

console.log('dataTable:', jobData);

    const headings = [
        "No.",
        "Job position",
        "Company",
        'Location',
        "Date applied",
        "HR profile",
        "Follow up",
        "Status",
        "Description",
        "Link to Post"
      ];


     
    return ( 
        <>
            <h1>Applicaiton here</h1>

            <section id="jobListing" className="my-5">
                <div className="container">
                  <div className="row mb-3">
                      <div className="col-md-12">
                          <FilterJobs />
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <JobTable  headings={headings} data={jobData.job}/>
                    </div>
                  </div>
                </div>
           
            </section>
        </>
     );
}
 
export default Applications;