import { createSlice } from "@reduxjs/toolkit";

export const userSilce = createSilce({
    name:"user",
    initialState:{
        user:null
    },
    reducers: {
        login: (state,action) => { //taking the state so we can update the state
            state.user = action.payload;


        },
        logout: (state) => {
            state.user = null;

        },
    },

}),

export const {login,logout} = userSilce.actions;

export const selectUser = (state) => state.user.user;

export default userSilce.reducer;
