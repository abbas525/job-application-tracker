import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DescriptionModal = ({modal, toggle, description}) => {
  return (
    <div>
       
    
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
