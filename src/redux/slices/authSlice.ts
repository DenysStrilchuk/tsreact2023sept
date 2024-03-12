import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IAuth} from "../../intterfaces";
import {authService} from "../../services";

interface IState {
    registerError: string;
    loginError: string;
}

const initialState:IState = {
    registerError: null,
    loginError: null
}

const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
        async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
        }
)

const login = createAsyncThunk<void, { user:IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.login(user)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(register.rejected, state => {
                state.registerError = 'Username or password  is already exist'
            })
            .addCase(login.rejected, state => {
                state.loginError = 'Wrong user name or password'
            })
            .addMatcher(isFulfilled(register, login), state => {
                state.registerError = null
                state.loginError = null
            })
})

const {reducer: authReducer, actions} = authSlice;
const authActions = {
    ...actions,
    register,
    login
}

export {
    authReducer,
    authActions
}