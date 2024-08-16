import JobTable from "../components/applicationTable/JobTable";
import { useSelector, useDispatch } from "react-redux";
import { addJob } from "./jobs/jobSlice";
import FilterJobs from "../components/forms/FilterJobs";

const Applications = () => {



 
    const headings = [
        "No.",
        "Job position",
        "Company",
        "Date applied",
        "HR profile",
        "Follow up",
        "Status",
        "Description",
        "Link to Post"
      ];

      const tableData = [
        { Position: "Frontend Developer", Company: "Cubix", DateApplied: "12-Aug-2024", HRProfile:"https://www.google.com", FollowUp: "Date", Status: "Pending", Description: "lorem ipsum blah blah blah", PostLink: "https://www.google.com" },
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
                    <JobTable  headings={headings} data={tableData}/>
                    </div>
                  </div>
                </div>
           
            </section>
        </>
     );
}
 
export default Applications;