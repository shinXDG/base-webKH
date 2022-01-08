import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
import swal from "sweetalert";
const initialState = {
  arr: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartList: (state) => {},
    addToCart: (state, action: any) => {},
    onDeleteCart: (state, action: any) => {},
    onDeleteMulti: (state, action: any) => {},
    onChangeQuantity: (state, action: any) => {},
    onHandleIncrease: (state, action: any) => {},
    onHandleDecline: (state, action: any) => {},
  },
});

export const {
  getCartList,
  addToCart,
  onDeleteCart,
  onHandleIncrease,
  onHandleDecline,
  onChangeQuantity,
  onDeleteMulti,
} = cartSlice.actions;

export default cartSlice.reducer;
