import JobTable from "../components/applicationTable/JobTable";
import { useSelector, useDispatch } from "react-redux";
import { addJob,deleteJob,fetchJobs } from "./jobs/jobSlice";
import FilterJobs from "../components/forms/FilterJobs";
import { useState,useEffect } from "react";
import ToastAlert from "../components/ToastAlert";

const Applications = () => {

const data = useSelector((state) => state?.job)
const dispatch = useDispatch()
const [toast, setToast] = useState(false)
const [jobData, setJobData] = useState([])

useEffect(() => {
  dispatch(fetchJobs());
}, [dispatch]);

// Delete Job Logic
const handleDelete = async (id) => {
  try {
    await dispatch(deleteJob(id)).unwrap(); 
    setToast(true)
    setTimeout(() => {
      setToast(false);  
    }, 3000);
  } catch (error) {
    console.error("Error deleting job:", error);
  }
  dispatch(fetchJobs());
};

 

//Search Jobs 
const handleFilter = (text) => { 
  let term = text.toLowerCase();

  if (!term) {
    setJobData(data?.job); 
    return;
  }

  const filterData = data?.job.filter((item) => 
    item.position.toLowerCase().includes(term) ||
    item.location.toLowerCase().includes(term) || 
    item.company.toLowerCase().includes(term)
)

  setJobData(filterData )
}


    const headings = [
        " ",
        "No.",
        "Job position",
        "Company",
        'Location',
        "Date applied",
        "HR profile",
        "Follow up",
        "Status",
        "Description",
        "Link to Post",
        "Actions"
      ];


     
    return ( 
        <>
            <h1>All Job Applicaitons</h1>
            {toast && <ToastAlert heading="Job Deleted Successfully" body="The job data has been deleted successfully." classes="text-danger"/>}
            <section id="jobListing" className="my-5">
                <div className="container">
                  <div className="row mb-3">
                      <div className="col-md-12">
                          <FilterJobs handleFilter={handleFilter}/>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <JobTable  headings={headings} data={jobData.length > 0 ? jobData : data?.job} handleDelete={handleDelete} dispatch={dispatch}/>
                    </div>
                  </div>
                </div>
           
            </section>
        </>
     );
}
 
export default Applications;