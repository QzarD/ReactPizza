export const addPizzaToCart = (pizza) => ({
  type: 'ADD_PIZZA_TO_CART',
  payload: pizza,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const deletePizzasCart = (id) => ({
  type: 'DELETE_PIZZAS_CART',
  payload: id,
});

export const minusPizzaCart = (id) => ({
  type: 'MINUS_PIZZA_CART',
  payload: id,
});

export const plusPizzaCart = (id) => ({
  type: 'PLUS_PIZZA_CART',
  payload: id,
});
