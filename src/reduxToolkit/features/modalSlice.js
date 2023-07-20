import { createSlice } from "@reduxjs/toolkit";

const views = ["Login", "Signup", "Reset Password"];
const initialState = {
  view: "Login",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      console.log(state);
      state.isOpen = true;
    },
    closeModal: (state) => {
      console.log(state);
      state.isOpen = false;
    },
    setView: (state, action) => {
      console.log(action.payload.view);
      if (!views.includes(action.payload.view)) {
        state.view = "Login";
        return;
      }
      state.view = action.payload.view;
    },
  },
});

console.log(modalSlice);

export const { openModal, closeModal, setView } = modalSlice.actions;

export default modalSlice.reducer;
