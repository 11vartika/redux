import { configureStore,createSlice } from '@reduxjs/toolkit'

// defining initial state 
const initialState = {
    isLoggedIn: false,
};
// create a slice 
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login (state) {
            state.isLoggedIn = true;
        },

        logout(state) {
            state.isLoggedIn = false
        }
    }
})
// create redux store 
const store  = configureStore({
    reducer :
        authSlice.reducer
    
})
// export const {login,logout} = authSlice.actions;
export const { login, logout } = authSlice.actions;
export default store;