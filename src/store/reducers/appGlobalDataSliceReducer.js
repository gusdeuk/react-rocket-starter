import { createSlice } from '@reduxjs/toolkit';

// 1 - reducer states defaults
const initialState = {
    isLogged: false,
    randomSessionId: Math.floor(Math.random() * 100).toString()
}

// 2 - reducer declaration > slice
export const appGlobalDataSlice = createSlice({
    name: 'appGlobalData',
    initialState,
    reducers: {
        setIsLogged: (state, showBool) => {
            state.isLogged = showBool.payload
        },
        setOtherThing: (state, showString) => {
            state.otherThing = showString.payload
        }
    }
})

// 3 - Action creators are generated for each case reducer function
export const { setIsLogged, setOtherThing } = appGlobalDataSlice.actions

export default appGlobalDataSlice.reducer
