import React, {useEffect, useState} from 'react';

import Context from './Context';
import config from '../resources/config';
import apiFetch from '../resources/apiFetch';

const GlobalState = props => {

  // Create state
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState([]);
  //const [cartPrice, setCartPrice] = useState(0);

  //const addProduct = product => {
  //  const newCart = [...cart, product];
  //  setCart(newCart);
  //};

  //const deleteProduct = productId => {
  //  const position = cart.findIndex(product => product.id === productId);
//
  //  if (position >= 0) {
  //    const newCart = [...cart];
  //    newCart.splice(position, 1);
  //    setCart(newCart);
  //  }
  //};

  //const thisProductIsInCart = productId =>
  //  cart.findIndex(product => product.id === productId) >= 0;

  //const updateCartPrice = () => {
  //  let newCartPrice = 0;
  //  cart.map(
  //    product => (newCartPrice = newCartPrice + parseFloat(product.price)),
  //  );
  //  setCartPrice(newCartPrice);
  //};

  // Fetch products
  const fetchProducts = async () => {
    const newProducts = await apiFetch.graphqlFetch(
      `
        {
          products(first: 10) {
            edges {
              node {
                id
                name
                image {
                  sourceUrl
                }
              }
            }
          }
        }
      `
    );
    console.log(newProducts);
    setProducts(newProducts);
  };

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  /* useEffect(() => {
    updateCartPrice();
  }, [cart]); */

  return (
    <Context.Provider
      value={{
        products,
        //cart,
        //setCart,
        //addProduct,
        //deleteProduct,
        //thisProductIsInCart,
        //cartPrice,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
