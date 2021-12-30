import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import communityImg from "../../images/community.png";
import { useHistory } from "react-router";
export default function Community() {
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
          src={communityImg}
          style={{ width: "-webkit-fill-available" }}
        ></img>
      </Modal.Body>
    </Modal>
  );
}
