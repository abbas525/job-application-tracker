import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DescriptionModal = ({modal, toggle, description}) => {
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);
  return (
    <div>
       {/* <Button color="danger" onClick={toggle}> Click Me </Button> */}
    
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Job Description</ModalHeader>
        <ModalBody>
          {description}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DescriptionModal;
