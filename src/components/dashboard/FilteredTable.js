import { Button, Card, CardBody, CardTitle, Table } from "reactstrap";
import DescriptionModal from "../DescriptionModal";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useEffect, useState } from "react";
import { fetchJobs } from "../../views/jobs/jobSlice";

const FilteredTable = forwardRef(({ data, title, icon}, ref) => {
  const [modal, setModal] = useState(false); 
  const [selectedRow, setSelectedRow] = useState(null); 
 
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
    "Link to Post", 
  ];
 
   //Modal Handling
   const toggle = (rowIndex) => {
    setSelectedRow(rowIndex);
    setModal(prev => !prev);
  };

  return (
  <>
      <Card innerRef={ref}>
      <CardBody>  
        {data?.length > 0 ? (
          <>
           <CardTitle tag="h5"><i className={`${icon} me-2`}></i>{title} Jobs</CardTitle>
          <div>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
          </>
        ): 
        (
          <h5 className="text-muted text-center">
            <i className={`${icon} me-2`}></i>
            No <strong>{title}</strong> Jobs to show yet</h5>
        )}
      </CardBody>
    </Card>

    <div></div>
  </>
  );
})

export default FilteredTable;