import { createSlice } from "@reduxjs/toolkit";

type TShoes = {
  name: string;
  price: number;
  brand: string;
  model: string;
  style: string;
  size: string;
  color: string;
  releaseDate: string;
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

const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    addShoes: (state, action: TAction) => {
      state.shoes.push(action.payload);
    },
    resetShoes: (state)=>{
      state.shoes = [];
    }
  },
});

export const { addShoes,resetShoes } = shoesSlice.actions;
export default shoesSlice.reducer;
