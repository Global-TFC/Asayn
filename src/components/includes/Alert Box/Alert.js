import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure to join the community?</h4>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Continue</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal