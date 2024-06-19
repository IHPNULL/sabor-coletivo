import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/User";
import { RootState } from "../app/store";

const initialState: UserType = {
  name: "",
  profilePic: "",
  followers: [],
  following: [],
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.name = action.payload.name;
      state.profilePic = action.payload.profilePic;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.token = action.payload.token;
    },
    setUserToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const selectUserProfile = (state: RootState): UserType =>
  state.userProfile;

export const { setUserProfile, setUserToken } = userProfileSlice.actions;
export default userProfileSlice.reducer;
