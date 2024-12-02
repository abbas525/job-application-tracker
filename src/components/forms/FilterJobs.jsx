import { useState } from "react";
import { Col, Form, Row, Input, Button, FormGroup, InputGroup, InputGroupText } from "reactstrap";

const FilterJobs = ({ handleFilter }) => {
const [searchText, setSearchTerm] = useState('')
 

const handleSearch = (e) => {
  setSearchTerm(e.target.value) 
  handleFilter(searchText);
}


//Clear Search
const clearSearch = () => {
  setSearchTerm("");
  handleFilter("");  
};
  return (
     
      <Row className="justify-content-end">
        <Col md={5}>
          <InputGroup> 
            <Input placeholder="Search by position, location or company" name="positionTerm" value={searchText} onChange={handleSearch} /> 
            <InputGroupText className="bg-light ">
              Search
            </InputGroupText>
          {searchText.length > 0 &&
            <button className="clear-btn btn-secondary" onClick={clearSearch}>
               <i className="bi bi-x-circle"></i>
            </button> 
          }
          </InputGroup>
          
        </Col>
      </Row>
     
  );
}

export default FilterJobs;