import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./Slices/UserSlices";
import CrudSlices from "./Slices/CrudSlices";

const store = configureStore({
  reducer: {
    user: userSlices,
    Crud: CrudSlices,
  },
});
export default store;
