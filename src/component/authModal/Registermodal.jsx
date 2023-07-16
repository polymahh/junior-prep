"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

export default function Authmodel() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("default")}>
        Toggle modal
      </Button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
        position="center"
      >
        <Modal.Header className="auth-modal-header">Register</Modal.Header>

        <Modal.Body>
          <ResetPassword />
        </Modal.Body>
      </Modal>
    </>
  );
}
