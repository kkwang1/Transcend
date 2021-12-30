import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import alternativePathwaysImg from "../../images/alt-path.png";
import { useHistory } from "react-router";

export default function AlternativePathways() {
  let history = useHistory();
  
  return (
      <Modal
        show
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          onHide={() => {
            history.goBack();
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={alternativePathwaysImg}
            style={{ width: "-webkit-fill-available" }}
          ></img>
        </Modal.Body>
      </Modal>
  );
}
