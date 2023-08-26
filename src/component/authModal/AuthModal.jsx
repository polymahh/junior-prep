"use client";

import { Button, Modal } from "flowbite-react";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../reduxToolkit/features/modalSlice";
import { useEffect } from "react";

export default function Authmodel() {
  const isOpen = useSelector((store) => store.modal.isOpen);
  const view = useSelector((store) => store.modal.view);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        show={isOpen}
        onClose={() => dispatch(closeModal())}
        position="center"
      >
        <Modal.Header className="auth-modal-header">{view}</Modal.Header>

        <Modal.Body>
          {(view === "Login" && <Login />) ||
            (view === "Signup" && <Register />) ||
            (view === "Reset Password" && <ResetPassword />)}
        </Modal.Body>
      </Modal>
    </>
  );
}
