import { useDispatch, useSelector } from "react-redux";
import ApplicationForm from "../components/forms/ApplicationForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addJob } from "./jobs/jobSlice";
import ToastAlert from "../components/ToastAlert";

const AddJob = () => {


  const jobData = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [toast, setToast] = useState(false)
  
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    dateApplied: null,
    location: '',
    status: 'Select',
    followUp: null,
    description: '',
    hrProfile: '',
    jobUrl: '',

  })

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData(prev => (
      {...prev, 
        [name]: value
      }
    ))
  }

  console.log('formData', formData.position.length);
  

  //submit job application
  const handleSubmit = (e) => {
    e.preventDefault();
    const {position, company, dateApplied, location} = formData

    if(!position.trim() || !company.trim() || !dateApplied.trim() || !location.trim()){
      alert("Required fields cannot be empty."); 
      return
    }
    
    dispatch(addJob(formData))

    //Reset Form
    setFormData({
      position: '',
      company: '',
      dateApplied: null,
      location: '',
      status: 'Select',
      followUp: null,
      description: '',
      hrProfile: '',
      jobUrl: '',
  
    })

    setToast(true)

    setTimeout(() => {
      setToast(false); 
      navigate('/applications')
    }, 3000);
 
  }


  return (
    <>
      <h1>New Job</h1>
      {toast && <ToastAlert heading="Job Added Successfully" body="The job data has been Added successfully." classes="text-success"/>}
      <section id="app-form">
        <div className="container">
          <div className="row justify-content-end my-5">
            <div className="col-12">
              <ApplicationForm handleFormData={handleFormData} handleSubmit={handleSubmit} formData={formData}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJob;
