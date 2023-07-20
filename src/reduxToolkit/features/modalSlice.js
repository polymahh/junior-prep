import { createSlice } from "@reduxjs/toolkit";

const views = ["login", "register", "reset"];
const initialState = {
  view: "login",
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
      if (!views.includes(action.payload)) {
        state.view = "login";
        return;
      }
      state.view = action.payload;
    },
  },
});

console.log(modalSlice);

export const { openModal, closeModal, setView } = modalSlice.actions;

export default modalSlice.reducer;
