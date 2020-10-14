import React from 'react';
import { useSelector } from 'react-redux';
import logoSvg from '../assets/img/pizza-logo.svg';
import { Button } from './';
import { Link } from 'react-router-dom';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <Link to="/">
              <h1>React Pizza</h1>
            </Link>
            <p>the most delicious pizza in the universe</p>
          </div>
        </div>
        <div className="header__cart">
          <Link to="/cart">
            <Button totalPrice={totalPrice} totalCount={totalCount} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
