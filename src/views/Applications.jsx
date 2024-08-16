import JobTable from "../components/applicationTable/JobTable";
import { useSelector, useDispatch } from "react-redux";
import { addJob } from "./jobs/jobSlice";
import FilterJobs from "../components/forms/FilterJobs";
import { useState } from "react";

const Applications = () => {

const jobData = useSelector((state) => state.job)


 
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
                    <JobTable  headings={headings} data={jobData.jobs}/>
                    </div>
                  </div>
                </div>
           
            </section>
        </>
     );
}
 
export default Applications;