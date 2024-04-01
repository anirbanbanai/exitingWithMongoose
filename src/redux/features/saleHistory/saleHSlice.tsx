import { createSlice } from "@reduxjs/toolkit";

type TShoes = {
  quantity: number,
  buyerNaame: string,
  dateOfSale: Date
};

type TInitialState = {
  shoes: TShoes[];
};
type TAction = {
  payload: TShoes;
};

const initialState: TInitialState = {
  shoes: [],
};

const salehSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    addSaleH: (state, action: TAction) => {
      state.shoes.push(action.payload);
    },
    resetSaleH: (state)=>{
      state.shoes = [];
    }
  },
});
export const {addSaleH,resetSaleH} = salehSlice.actions;
export default salehSlice.reducer;
