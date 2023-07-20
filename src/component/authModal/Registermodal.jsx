"use client";

import { Button, Modal } from "flowbite-react";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../reduxToolkit/features/modalSlice";

export default function Authmodel() {
  const isOpen = useSelector((store) => store.modal.isOpen);
  const view = useSelector((store) => store.modal.view);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(openModal())}>Toggle modal</Button>
      <Modal
        show={isOpen}
        onClose={() => dispatch(closeModal())}
        position="center"
      >
        <Modal.Header className="auth-modal-header">Register</Modal.Header>

        <Modal.Body>
          {(view === "login" && <Login />) ||
            (view === "register" && <Register />) ||
            (view === "reset" && <ResetPassword />)}
        </Modal.Body>
      </Modal>
    </>
  );
}
