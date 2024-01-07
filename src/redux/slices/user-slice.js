import { createSlice } from '@reduxjs/toolkit'

const itemKey = `hostelow`

const loadFromLocalStorage = () =>{

    try{
        if (typeof localStorage === "undefined") {
            return undefined;
          }
        const serializeState = localStorage.getItem(itemKey);
        if(serializeState === null){
            return undefined;
        }
        return JSON.parse(serializeState);

    }catch(err){
        console.error("Error loading state from local storage:", err);
        return undefined;
    }

}

const saveToLocalStorage = (state) => {
try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem(itemKey, serializedState);

}catch(err){
    console.error("Error saving state to local storage:", err);
}
}


const initialState = loadFromLocalStorage() || {
    user: null
};

const userSlice = createSlice({

    name: `user`,
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const data = action.payload
            const userData = { ...data.user, access: { ...data.access }, refresh: { ...data.refresh } }
            state.user = userData
            saveToLocalStorage(state)
        }, 
        cleanUserData: (state) => {
            state.user = null
            saveToLocalStorage(state)
        },
        verifyUser:(state)=>{
            state.user.isVerified = true
            saveToLocalStorage(state)
        }
    }

})



export const { setUserData, cleanUserData,verifyUser} = userSlice.actions;

export const userData = (state) => state.user.user;

export default userSlice.reducer;