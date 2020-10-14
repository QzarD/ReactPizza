const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allItems = [].concat.apply([], Object.values(newItems));
      const totalPrice = allItems.reduce((sum, item) => sum + item.price, 0);
      const totalCount = allItems.length;
      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case 'DELETE_PIZZAS_CART':
      const { [action.payload]: del, ...newCartItems } = state.items;
      return {
        ...state,
        items: newCartItems,
        totalPrice: state.totalPrice - del.length * del[0].price,
        totalCount: state.totalCount - del.length,
      };
    case 'MINUS_PIZZA_CART':
      const delPizza = state.items[action.payload].splice(0, 1);
      return {
        ...state,
        totalPrice: state.totalPrice - delPizza[0].price,
        totalCount: state.totalCount - 1,
      };
    case 'PLUS_PIZZA_CART':
      const newObjItems = {
        ...state.items,
        [action.payload]: [...state.items[action.payload], state.items[action.payload][0]],
      };
      return {
        ...state,
        items: newObjItems,
        totalPrice: state.totalPrice + state.items[action.payload][0].price,
        totalCount: state.totalCount + 1,
      };
    default:
      return state;
  }
};
export default cart;
