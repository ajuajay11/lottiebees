import { createSlice } from '@reduxjs/toolkit'

const initialState ={
   isAuthenticated: false,
 
}



const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginSuccess: (state ) => {
         state.isAuthenticated = true
        },

    }
}) 

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateUser,
  clearError
} = authSlice.actions

export default authSlice.reducer;

const myrpromise = new Promise((res, rej)=>{
  console.log('pending promise');
  setTimeout(() => {
    const success = true;

    if(success){
      resolve("data is received");
    }else{
      reject("errver")
    }
  }, 2000);
  
})
// use prmose daata?

async function handlePromise()(){
  try {
    const res = await myrpromise();
    console.log(res);
    
  } catch (error) {
    console.error(error);
    
  }
}