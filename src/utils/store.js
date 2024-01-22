import { configureStore } from "@reduxjs/toolkit";
import user_data from "./user_data";


const store = configureStore({
  reducer: {
    user:user_data,
   
  }
})

export default store