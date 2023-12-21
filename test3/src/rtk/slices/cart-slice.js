import { createSlice } from "@reduxjs/toolkit";

export const cartSlice =   createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        AddToCart:(state,action)=>{
         const findproduct =    state.find((product)=>product.id === action.payload.id)
         if(findproduct){
            findproduct.quantity += 1;
         }else{
            const productClone = {...action.payload,quantity:1}
            state.push(productClone);
         }   
        // state.push(action.payload);
        },
        deleteFromCart:(state,action)=>{
            return state.filter((product)=> product.id != action.payload.id)
        },
        Clear:(state,action)=>{
            return []
        }
    }
})
export const {AddToCart,deleteFromCart,Clear} =cartSlice.actions;
export default cartSlice.reducer