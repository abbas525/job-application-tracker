import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ApplicationForm = () => {
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
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
              <FormGroup>
              <Label for="exampleSelect">Status</Label>
              <Input id="exampleSelect" name="select" type="select">
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
                  /> 
            </FormGroup>
              </Col>
            </Row>


            
            <FormGroup>
              <Label for="description">Job Description</Label>
              <Input id="description" name="text" type="textarea" Rows={5}/>
            </FormGroup>
           
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="hr-profile">HR Profile</Label>
                  <Input
                    id="hr-profile"
                    name="hr-profile"
                    placeholder="Enter Link to HR profile"
                    type="text"
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
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <Button>Save</Button>
          </Form>
  );
};

export default ApplicationForm;
