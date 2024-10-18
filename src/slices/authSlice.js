import React from "react";
import {createSlice} from "@reduxjs/toolkit"

const initialState={
    signupData:null,
    loading:false,
    token: localStorage.getItem("SHEildToken") ? JSON.parse(localStorage.getItem("SHEildToken")) : null,
};

const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignupData(state,value)
        {
            state.signupData=value.payload;
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setToken(state,value)
        {
            state.token = value.payload;
        }
    }
})

export  const {setToken,setSignupData,setLoading} = authSlice.actions;
export default authSlice.reducer;