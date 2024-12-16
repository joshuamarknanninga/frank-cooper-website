// frontend/src/components/ServiceModal.jsx

import React from 'react';
import { Modal, Header, Image, Button } from 'semantic-ui-react';

const ServiceModal = ({ open, onClose, service }) => (
  <Modal open={open} onClose={onClose}>
    <Header icon="archive" content={service.title} />
    <Modal.Content image>
      <Image wrapped size="medium" src={service.image || '/images/default-service.png'} />
      <Modal.Description>
        <Header>Description</Header>
        <p>{service.fullDescription}</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red" onClick={onClose}>
        <i className="remove icon" /> Close
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ServiceModal;
