import React from 'react';

const Categories = React.memo(function Categories({ items, onClick, activeCategory }) {
  const onSelectItem = (index) => {
    onClick(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => {
            onSelectItem(null);
          }}>
          All
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => {
                  onSelectItem(index);
                }}
                key={`${item}_${index}`}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
