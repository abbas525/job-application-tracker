import {
  FormGroup,
  Input,
  Button,
  Table,
  Form,
  Row,
  Toast,
  ToastHeader,
  ToastBody,
  Label,
} from "reactstrap";
import { useState } from "react";
import DescriptionModal from "../DescriptionModal";
import ApplicationForm from "../forms/ApplicationForm";
import { editJob, fetchJobs } from "../../views/jobs/jobSlice";
import ToastAlert from "../ToastAlert";


const JobTable = ({ headings, data, handleDelete, dispatch }) => {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedEditRow, setSelectedEditRow] = useState(null);
  const [editRowData, setEditRowData] = useState({});
  const [booked, setBooked] = useState(false)

  //Modal Handling
  const toggle = (rowIndex) => {
    setSelectedRow(rowIndex);
    setModal(!modal);
  };

  //Edit Row
  const handleEdit = (rowIndex) => {
    setEditRowData(data[rowIndex])
    setSelectedEditRow(rowIndex);
    setEditModal(prev => !prev)
  }

  //Setting edit data
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setEditRowData(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

  //Saving Edit data for table
  const handleSaveEdit = async () => {
    const updatedData = [...data];
    updatedData[selectedEditRow] = { ...data[selectedEditRow], ...editRowData };
    try {
      await dispatch(editJob(updatedData[selectedEditRow])).unwrap();
      await dispatch(fetchJobs());

      setEditModal(false);
      setToast(true)

      setTimeout(() => {
        setToast(false); // Hide the toast after 5 seconds
      }, 3000);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };


  //Handle Bookmarks
  const handleBookmark = async (rowIndex) => {
    const updatedData = [...data]
    updatedData[rowIndex] =  {...data[rowIndex], bookmark: !data[rowIndex].bookmark }; 

    try {
      await dispatch(editJob(updatedData[rowIndex])).unwrap();
      await dispatch(fetchJobs()) 
    } catch (error) {
      console.log('Error bookmarking the job' + error);
    }
  }
  
  return (
    <>
      {toast && <ToastAlert heading="Job Updated Successfully" body="The job data has been updated successfully. Your changes have been saved." classes="text-success" />}
      <DescriptionModal
        modal={editModal}
        setModal={setEditModal}
        heading="Edit Application"
        content={<ApplicationForm formData={editRowData} handleFormData={handleFormData} handleSubmit={handleSaveEdit} />}
        isEdit={true}
        toggle={() => setEditModal(prev => !prev)}
      />
      <Table responsive bordered style={{ width: "100%" }} className="rounded-3">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (

            <tr key={rowIndex}>
              <td> 
                <Input name="bookmark" type="checkbox" id={`bookmark-${rowIndex}`} checked={row.bookmark} onChange={() => handleBookmark(rowIndex)} className="d-none"/>
                <Label check htmlFor={`bookmark-${rowIndex}`} style={{cursor:'pointer'}}>
                  <i className={`${row.bookmark ? 'bi bi-bookmarks-fill' : 'bi bi-bookmarks'}`}></i>
                </Label>

              </td>
              <td>{rowIndex + 1}</td>
              <td>{row.position}</td>
              <td>{row.company}</td>
              <td>{row.location}</td>
              <td>{row.dateApplied}</td>
              <td><a href={row.hrProfile} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
              </td>
              <td>{row.followUp}</td>
              <td>
                {row.status}
              </td>
              <td>
                <Button onClick={() => toggle(rowIndex)} className="bg-white border-0 text-dark p-0">
                  View
                </Button>
                {selectedRow === rowIndex && (
                  <DescriptionModal
                    modal={modal}
                    setModal={setModal}
                    heading="Job Description"
                    toggle={() => toggle(rowIndex)}
                    content={<div dangerouslySetInnerHTML={{ __html: row.description.replace(/\n/g, "<br />") }}></div>}
                  />
                )}
              </td>
              <td>
                <a href={row.jobUrl} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </td>
              <td className="d-flex justify-content-around">
                <Button onClick={() => handleEdit(rowIndex)} className="bg-white border-0 text-dark p-0 me-1">
                  <i className="bi bi-pencil-fill" style={{ fontSize: "12px" }}></i>
                </Button>
                <Button onClick={() => handleDelete(row.id)} className="bg-white border-0 text-dark p-0">
                  <i className="bi bi-trash-fill" style={{ fontSize: "12px" }}></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default JobTable;
