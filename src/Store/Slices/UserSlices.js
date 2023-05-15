import { createSlice } from "@reduxjs/toolkit";
const userSlices = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, acction) {
      state.push(acction.payload);
      //   console.log("dfghjklkjhgfghjkl", acction.payload);
    },
    removeUser(state, acction) {
      state.splice(acction.payload, 1);
    },

    deleteUser(state, acction) {
      return [];
    },
    UpdateUser(state, acction) {},
  },
});
export default userSlices.reducer;
export const { addUser, removeUser, deleteUser } = userSlices.actions;
