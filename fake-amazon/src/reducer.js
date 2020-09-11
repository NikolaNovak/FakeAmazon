export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      let existingItem = false;
      console.log();
      state.basket.forEach((item) => {
        if (!existingItem && item.id === action.item.id) {
          existingItem = true;
        }
      });
      if (existingItem) return { ...state };
      else return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      return { ...state, basket: state.basket.filter((item) => item.id !== action.id) };
    default:
      return state;
  }
};

export default reducer;
