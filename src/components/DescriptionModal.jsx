import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DescriptionModal = ({modal, toggle, content, heading, isEdit}) => {
 
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} faded="false"  centered={true} style={isEdit ? {} : { maxWidth: '800px' }}>
        <ModalHeader toggle={toggle}>{heading}</ModalHeader>
        <ModalBody>
          {content}
        </ModalBody>
       
        {!isEdit &&   
         <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
          </ModalFooter>
         } 
        
      </Modal>
    </div>
  );
};

export default DescriptionModal;
