import { ADD_PRICE } from "../constants/types";

export const addSeatPrices = data => ({
  type: ADD_PRICE,
  payload: data
});
export const unBookSeat = data => ({
  type: "UNBOOKSEAT",
  payload: data
});
