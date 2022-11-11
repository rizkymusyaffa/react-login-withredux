import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState ={
    isLogin: false,
    isLoading: false,
    errorMessage:'',
    user:{}
}

export const fetchDataUsers = createAsyncThunk('getData/users', async (user) =>{
    try{
        const response = await axios.get(`https://fakestoreapi.com/users`);
        const UserData = await response.data;
        const checkElement = await UserData.find(item => (item.email === user.email || item.username === user.email) && item.password === user.password)
        const admin = {
            name:"admin",
            email:"admin@bukapedia.com",
            password:"admin123"
        }

        if(checkElement){
            return checkElement
        } else if(user.email === admin.email && user.password === admin.password) {
            return admin
        } else {
            throw new Error(400)
        }

        
        
    }catch(error){ 
         throw error
    }


})

export const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        logout: (state) =>{
            state.isLogin = initialState.isLogin;
            state.user = initialState.user
            // localStorage.removeItem('user') 
            // localStorage.removeItem('isLogin')
        },
    },
    extraReducers(builder){
        builder
        .addCase(fetchDataUsers.fulfilled, (state, action) => {
            state.isLogin = true;
            state.isLoading = initialState.isLoading;
            state.errorMessage = initialState.errorMessage;
            state.user = action.payload;
            // localStorage.setItem('user', JSON.stringify(state.user)) // jika butuh local storage
            // localStorage.setItem('isLogin', state.isLogin)

        })
        .addCase(fetchDataUsers.pending, (state) => {
            state.isLoading = true

        })
        .addCase(fetchDataUsers.rejected, (state) => {
            state.isLoading = initialState.isLoading
            state.errorMessage = 'email atau password salah'

        })
    }
})



export const {logout} = LoginSlice.actions;

export default LoginSlice.reducer;