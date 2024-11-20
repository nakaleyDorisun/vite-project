import { createSlice } from "@reduxjs/toolkit";
import { IBeers, beers } from "../../data/beers";

const initialState = beers;

const beerSlice = createSlice({
  name: "beers",
  initialState: [] as IBeers[],
  reducers: {
    addBeer: (state, action) => {
      console.log("addBeer", action.payload);
    },
    deleteBeer: (state, action) => {
      console.log("deleteBeer");
    },
    filterBeer: (state, action) => {},
  },
});

const { reducer } = beerSlice;
export const { addBeer, deleteBeer, filterBeer } = beerSlice.actions;
export default reducer;
