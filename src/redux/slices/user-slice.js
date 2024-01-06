import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null
};

const userSlice = createSlice({

    name: `user`,
    initialState,
    reducers: {
        setUserData: (state, action) => {
            // console.log(action.payload)
            const data = action.payload;
            const userData = { ...data.user, access: { ...data.access }, refresh: { ...data.refresh } }
            state.user = userData
        }, 
        cleanUserData: (state) => {
            state.user = null;
        }
    }

})



export const { setUserData, cleanUserData} = userSlice.actions;

export const userData = (state) => state.user.user;

export default userSlice.reducer;