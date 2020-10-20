export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_CART":
      let existingItem = false;
      console.log();
      state.cart.forEach((item) => {
        if (!existingItem && item.id === action.item.id) {
          existingItem = true;
        }
      });
      if (existingItem) return { ...state };
      else return { ...state, cart: [...state.cart, action.item] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.id) };
    case "EMPTY_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
