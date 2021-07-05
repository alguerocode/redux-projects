import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn:false,
    userData: null,
    searchInput: 'tech',
    blogData: null
  },
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    }
  }
});

export const userReducer = userSlice.reducer;

export const { setBlogData, setInput, setSignedIn, setUserData } = userSlice.actions;

export const selectSingedIn =(state) =>state.user.isSignedIn;
export const selectUserData =(state) =>state.user.userData;
export const selectBlogData=(state) =>state.user.blogData;
export const selectSearchInput =(state) =>state.user.searchInput;