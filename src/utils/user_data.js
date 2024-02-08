import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
  name:"user",
  initialState:{
    name:"",  
    
  },
  reducers:{
    getUser:(state, action)=>{
      state.name = action.payload
    }
    
    
  }
})


export const {getUser} = user.actions


export default user.reducer
