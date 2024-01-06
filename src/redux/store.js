import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './slices/user-slice'



export default configureStore({

        reducer: {
            user: userSliceReducer
        }
    })
