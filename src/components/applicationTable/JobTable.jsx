import {
  FormGroup,
  Input,
  Button,
  Table,
} from "reactstrap";
import { useState } from "react";
import DescriptionModal from "../DescriptionModal";

const JobTable = ({ headings, data }) => {
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const toggle = (rowIndex) => {
    setSelectedRow(rowIndex);  // Set the selected row when modal is toggled
    setModal(!modal);
  };
  
  return (
    <Table responsive bordered style={{ width: "100%"}} className="rounded-3">
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
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
                  toggle={() => toggle(rowIndex)} 
                  description={row.description} 
                />
              )}
            </td>
            <td>
              <a href={row.jobUrl} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default JobTable;
