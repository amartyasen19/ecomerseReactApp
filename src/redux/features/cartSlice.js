import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

//card slice

const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    //add to cart
    addToCart: (state, action) => {
      // console.log("action",  action);
      const ItemIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp={...action.payload, qnty:1}
        state.carts = [...state.carts, temp];
      }
    },


    //remove perticular items
    removeToCart:(state, action)=>{
      const data=state.carts.filter((ele)=>ele.id!==action.payload);
      state.carts=data
    },

    //remove single iteams
    removeSingleIteams:(state, action)=>{
      const ItemIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if(state.carts[ItemIndex_dec].qnty>=1){
        state.carts[ItemIndex_dec].qnty-=1
      }
    },

    // clear cart
    emptycartItem:(state, action)=>{
      state.carts=[]
    }
  },
});

export const { addToCart , removeToCart, removeSingleIteams, emptycartItem} = cartSlice.actions;
export default cartSlice.reducer;
