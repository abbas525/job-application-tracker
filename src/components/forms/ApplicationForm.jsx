
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ApplicationForm = ({ formData, handleFormData, handleSubmit }) => {

  return (
    <Form className="bg-white p-4 shadow-sm border " onSubmit={handleSubmit} >
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="position">Job Position <span className="text-danger">*</span></Label>
            <Input
               required
              id="position"
              name="position"
              placeholder="Enter Job Position"
              type="text"
              value={formData.position}
              onChange={handleFormData}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="company">Company <span className="text-danger">*</span></Label>
            <Input
            required
              id="company"
              name="company"
              placeholder="Company Name"
              type="text"
              value={formData.company}
              onChange={handleFormData}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="dateApplied">Date Applied <span className="text-danger">*</span></Label>
            <Input
            required
              id="dateApplied"
              name="dateApplied"
              type="date"
              value={formData.dateApplied || ''}
              onChange={handleFormData}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="location">Location <span className="text-danger">*</span></Label>
            <Input
            required
              id="location"
              name="location"
              placeholder="Location"
              type="text"
              value={formData.location}
              onChange={handleFormData}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              id="status"
              name="status"
              type="select"
              value={formData.status}
              onChange={handleFormData}>
              <option>Not Applied</option>
              <option>Applied</option>
              <option>Accepted</option>
              <option>Not Responded</option>
              <option>Call Recieved</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="follow-up-date">Follow Up Date</Label>
            <Input
              id="follow-up-date"
              name="followUp"
              type="date"
              value={formData.followUp || ''}
              onChange={handleFormData}
            />
          </FormGroup>
        </Col>
      </Row>



      <FormGroup>
        <Label for="description">Job Description</Label>
        <Input id="description" name="description" type="textarea" Rows={5} value={formData.description}
          onChange={handleFormData} />
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
              value={formData.hrProfile}
              onChange={handleFormData}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="job-url">Applying Email or Job Link</Label>
            <Input
              id="job-url"
              name="jobUrl"
              placeholder="Enter applying email or link to Job Ad"
              type="url"
              value={formData.jobUrl}
              onChange={handleFormData}
            />
          </FormGroup>
        </Col>
      </Row>

      <Button color="primary" onClick={handleSubmit}>Save</Button>
    </Form>
  );
};

export default ApplicationForm;
