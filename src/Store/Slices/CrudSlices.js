import { createSlice } from "@reduxjs/toolkit";
import UserList from "../../Data";

// const initialState = { UserList: UserList };

const StudentsSlices = createSlice({
  name: "Crud",
  initialState: UserList,
  reducers: {
    addStudents(state, acction) {
      state.push(acction.payload);
    },

    UpdateStudents(state, acction) {
      const { id, name, email } = acction.payload;
      const updateUser = state.find((item) => item.id == id);
      if (updateUser) {
        updateUser.name = name;
        updateUser.email = email;
      }
    },
    deleteStudents(state, acction) {
      const { id } = acction.payload;
      const DeleteUser = state.find((item) => item.id == id);
      if (DeleteUser) {
        return state.filter((item) => item.id !== id);
      }
    },
  },
});
export default StudentsSlices.reducer;
export const { addStudents, deleteStudents, UpdateStudents } =
  StudentsSlices.actions;
