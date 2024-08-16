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
  const toggle = () => setModal(!modal);
  
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
            <td>{row.Position}</td>
            <td>{row.Company}</td>
            <td>
              <Input
                id="applied"
                name="appliedDate"
                type="date"
                className="border-0 p-0"
              />
            </td>
            <td>
              <a href={row.HRProfile} target="_blank" rel="noopener noreferrer">
                HR Profile
              </a>
            </td>
            <td>{row.FollowUp}</td>
            <td>
              <FormGroup>
                <Input id="status" name="select" type="select" className="border-0 py-0">
                  <option>No Applied</option>
                  <option>Applied</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                  <option>Call Recieved</option>
                </Input>
              </FormGroup>
            </td>
            <td>  <Button onClick={toggle} className="bg-white border-0 text-dark p-0 "> View </Button>
                <DescriptionModal modal={modal} setModal={setModal} toggle={toggle} description={row.Description}/>
            </td>
            <td>
              <a href={row.PostLink} target="_blank" rel="noopener noreferrer">
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
