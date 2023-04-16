import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../components/types";

interface IUserState {
  users: IUser[];
}
const initialState: IUserState = {
  users: [],
};

export const formSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
  },
});
export default formSlice.reducer;
