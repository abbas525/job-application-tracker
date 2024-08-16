import { Col, Form, Row, Input, Button } from "reactstrap";

const FilterJobs = () => {
    return ( 
        <Form>
            <Row>
                <Col md={3}>
                  <Input placeholder="Position"/>
                </Col>
                <Col md={3}>
                  <Input placeholder="Location"/>
                </Col>
                <Col md={3}>
                  <Input placeholder="Status"/>
                </Col>
                <Col md={3}>
                  <Button color="primary" className="w-100">Search</Button>
                </Col>
            </Row>
        </Form>
     );
}
 
export default FilterJobs;