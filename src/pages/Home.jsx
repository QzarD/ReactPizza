import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
//import PizzaLoadingBlock from '../components/PizzaLoadingBlock';

const itemsCategories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
const itemsSortPopup = [
  { category: 'popularity', type: 'popular', order: 'desc' },
  { category: 'price', type: 'price', order: 'asc' },
  { category: 'alphabet', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded, sortBy, category, cartItems } = useSelector(
    ({ pizzas, filters, cart }) => {
      return {
        items: pizzas.items,
        isLoaded: pizzas.isLoaded,
        sortBy: filters.sortBy,
        category: filters.category,
        cartItems: cart.items,
      };
    },
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const handlePizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(index) => dispatch(setCategory(index))}
          items={itemsCategories}
          activeCategory={category}
        />
        <SortPopup
          onClick={(type) => dispatch(setSortBy(type))}
          items={itemsSortPopup}
          activeSortType={sortBy.type}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (
                <PizzaBlock
                  key={obj.id}
                  onClickAddPizza={handlePizzaToCart}
                  addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                  {...obj}
                />
              ))
            : 'Loading' /*Array(1)
              .fill(0)
        .map((_, index) => <PizzaLoadingBlock key={index} />)*/
        }
      </div>
    </div>
  );
}

export default Home;
