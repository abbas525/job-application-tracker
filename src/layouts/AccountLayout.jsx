import { Col, Container, Row } from "reactstrap";
import { Outlet } from "react-router-dom";

const AccountLayout = () => {
    return ( 
        <div className="account">
            <Container className="p-4 wrapper"> 
                <Row className="justify-content-center text-center">
                    <Col md="6">
                    <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default AccountLayout;