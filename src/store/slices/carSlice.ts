import {createSlice} from "@reduxjs/toolkit";

interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    trigger: boolean
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {}
})

const {reducer: carReducer, actions} = carSlice;

const  carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}