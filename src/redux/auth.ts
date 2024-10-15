import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../util/server";
import { toast } from "react-toastify";
import { toastOptions } from "../util/toastOptions";

const initialState = {
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: false
};

export const login = createAsyncThunk(
	'auth/login',
	async (user, { rejectWithValues }: any) => {
		try {
			const res = await SERVER.post('register', user);
            const token = res.data.token;
			localStorage.setItem('token', JSON.stringify(res.data.token));
			return token;
		} catch (error) {
			return rejectWithValues(error);
		}
	}
)



export const register = createAsyncThunk(
	'auth/register',
	async (user, { rejectWithValues }: any) => {
		try {
			const res = await SERVER.post('login', user);
            const token = res.data.token;
			localStorage.setItem('token', JSON.stringify(res.data.token));
			return token;
		} catch (error) {
			return rejectWithValues(error);
		}
	}
)



const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		}
	},

	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = 'pending';
			})
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.token = action.payload;
				toast.success('Login successfully!', {...toastOptions})
			})
		builder
			.addCase(login.rejected, (state) => {
				state.status = 'failed';
				toast.success('Failed to login in!', {...toastOptions})
			})

        builder
			.addCase(register.pending, (state) => {
				state.status = 'pending';
			})
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.token = action.payload;
				toast.success('Login successfully!', {...toastOptions})
			})
		builder
			.addCase(register.rejected, (state) => {
				state.status = 'failed';
				toast.success('Failed to login in!', {...toastOptions})
			})
	}
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
