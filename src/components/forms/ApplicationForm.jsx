import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addJob, fetchJobs } from "../../views/jobs/jobSlice";

const ApplicationForm = () => {
  const [position, setPosition] = useState(null)
  const [company, setCompany] = useState(null)
  const [dateApplied, setDateApplied] = useState(null)
  const [location, setLocation] = useState(null)
  const [status, setStatus] = useState(null)
  const [followUp, setFollowUp] = useState(null)
  const [hrProfile, setHrProfile] = useState(null)
  const [description, setDescription] = useState(null)
  const [jobUrl, setJobUrl] = useState(null)

  const jobData = useSelector((state) => state.job);
  const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
    'position': position,
    'company': company,
    'dateApplied': dateApplied,
    'location': location,
    'status': status,
    'followUp': followUp,
    'hrProfile': hrProfile,
    'description': description,
    'jobUrl': jobUrl
  }

dispatch(addJob(data));
dispatch(fetchJobs());
}

  return (
    <Form className="bg-white p-4 shadow-md ">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="position">Job Position</Label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="Enter Job Position"
                    type="text"
                    onChange={(e) => {setPosition(e.target.value)}}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    type="text"
                    onChange={(e) => {setCompany(e.target.value)}}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="dateApplied">Date Applied</Label>
                  <Input
                    id="dateApplied"
                    name="dateApplied"
                    type="date"
                    onChange={(e) => {setDateApplied(e.target.value)}}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                   <Label for="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Location"
                    type="text"
                    onChange={(e) => {setLocation(e.target.value)}}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
              <FormGroup>
              <Label for="status">Status</Label>
              <Input id="status" name="select" type="select"  onChange={(e) => {setStatus(e.target.value)}}>
                <option>Not Applied</option>
                <option>Applied</option>
                <option>Accepted</option>
                <option>Rejected</option>
                <option>Call Recieved</option>
              </Input>
            </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
               <Label for="follow-up-date">Follow Up Date</Label>
                  <Input
                    id="follow-up-date"
                    name="follow-up-date"
                    type="date"
                    onChange={(e) => {setFollowUp(e.target.value)}}
                  /> 
            </FormGroup>
              </Col>
            </Row>


            
            <FormGroup>
              <Label for="description">Job Description</Label>
              <Input id="description" name="text" type="textarea" Rows={5} onChange={(e) => {setDescription(e.target.value)}}/>
            </FormGroup>
           
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="hrProfile">HR Profile</Label>
                  <Input
                    id="hrProfile"
                    name="hrProfile"
                    placeholder="Enter Link to HR profile"
                    type="url"
                    onChange={(e) => {setHrProfile(e.target.value)}}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="job-url">Job Url</Label>
                  <Input
                    id="job-url"
                    name="job-url"
                    placeholder="Enter link to Job Ad"
                    type="url"
                    onChange={(e) => {setJobUrl(e.target.value)}}
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <Button onClick={handleSubmit}>Save</Button>
          </Form>
  );
};

export default ApplicationForm;
