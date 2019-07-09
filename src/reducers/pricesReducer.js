// import { PRICE } from "../actions/types";
const initialState = {
  value: {},
  prices: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRICE": {
      state.prices.push(action.payload);
      const seatPrices = state.prices;
      let allSeats = [];
      let seatsArray = [];
      let updatedSeats = [];
      for (let i = 0; i < seatPrices.length; i++) {
        const element = seatPrices[i];
        seatsArray.push(element.seatPrice);
        allSeats.push(element);
      }
      for (let i = 0; i < allSeats.length; i++) {
        const element = allSeats[i];
        if (element.bookStatus) {
          //   console.log(element);
          updatedSeats.push(element);
        } else {
          console.log("----> element", element);
          let newArr = updatedSeats.filter(
            x => x.seatName !== element.seatName
          );
          console.log("----> filtered new arr", newArr);
        }
      }

      console.log("filtered seats --->", updatedSeats);
      const totalSeatsPrice = seatsArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      const totalNumberOfSeats = seatsArray.length;
      return {
        ...state,
        payload: action.payload,
        numberOfSeats: totalNumberOfSeats,
        totalSeatsBookedPrice: totalSeatsPrice
      };
    }

    default:
      return state;
  }
};
