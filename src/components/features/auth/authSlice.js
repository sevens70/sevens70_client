import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  createUser,
  signOut,
  checkAuth,
  resetPasswordRequest,
  resetPassword,
} from "./authAPI";
import toast from "react-hot-toast";
// import { updateUser } from "../user/userAPI";

const initialState = {
  loggedInUserToken: null, // this should only contain user identity => 'id'/'role'
  status: "idle",
  error: null,
  userChecked: false,
  mailSent: false,
  passwordReset: false,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await createUser(userData);
      if (response.data?.token) {
        sessionStorage.setItem("authToken", response.data.token);
      }
      return response.data;
    } catch (error) {
      toast.error("Failed to create account.");
      return rejectWithValue(error);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (loginInfo, { rejectWithValue }) => {
    console.log("1234", loginInfo);
    try {
      const response = await loginUser(loginInfo);
      if (response.data?.token) {
        sessionStorage.setItem("authToken", response.data.token);
      }
      return response.data;
    } catch (error) {
      toast.error("Failed to login, check account & credentials.");
      return rejectWithValue(error);
    }
  }
);

export const checkAuthAsync = createAsyncThunk("user/checkAuth", async () => {
  try {
    const response = await checkAuth();
    if (response.data) {
      sessionStorage.setItem("authData", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const resetPasswordRequestAsync = createAsyncThunk(
  "user/resetPasswordRequest",
  async (email, { rejectWithValue }) => {
    try {
      const response = await resetPasswordRequest(email);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const resetPasswordAsync = createAsyncThunk(
  "user/resetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await resetPassword(data);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const signOutAsync = createAsyncThunk("user/signOut", async () => {
  const response = await signOut();
  sessionStorage.removeItem("authData");
  sessionStorage.removeItem("authToken");
  return response.data;
});

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.loggedInUserToken = action.payload;
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.loggedInUserToken = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.loggedInUserToken = null;
      })
      .addCase(checkAuthAsync.pending, (state) => {
        state.status = "failed";
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
        state.userChecked = true;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.status = "idle";
        state.userChecked = true;
      })
      .addCase(resetPasswordRequestAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetPasswordRequestAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.mailSent = true;
      })
      .addCase(resetPasswordAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetPasswordAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.passwordReset = true;
      })
      .addCase(resetPasswordAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const selectLoggedInUser = (state) => state.auth?.loggedInUserToken;
export const authStatus = (state) => state.auth?.status;
export const selectError = (state) => state.auth?.error;
export const selectUserChecked = (state) => state.auth?.userChecked;
export const selectMailSent = (state) => state.auth?.mailSent;
export const selectPasswordReset = (state) => state.auth?.passwordReset;

export default authSlice.reducer;
