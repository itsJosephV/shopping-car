import React, { createContext, useState } from "react";
export const CartContext = createContext(null);
const CartContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setcountProducts] = useState(0);

  const addItem = (item) => {
    if (allProducts.some((itemState) => itemState.id === item.id)) {
      const allProductsUpdated = allProducts.map((itemState) => {
        if (itemState.id === item.id) {
          return {
            ...itemState,
            quantity: itemState.quantity + 1,
          };
        }
        return itemState;
      });
      setAllProducts(allProductsUpdated);
      console.log('Added existing item in cart + 1')
    } else {
      setAllProducts([...allProducts, { ...item, quantity: 1 }]);
      console.log('Added item first time')
    }
  };

  const deleteItem = (itemId) => {
    const allProductsUpdated = allProducts.filter((item) => item.id != itemId)
    setAllProducts(allProductsUpdated)
    console.log('item deleted')
  }

  const updateQuantity = (item) => {
    const allProductsUpdated = allProducts.map((itemState) => {
      if (itemState.id === item.id) {
        itemState.quantity = +item.quantity
      }
      return itemState
    })
    setAllProducts(allProductsUpdated)
  }



  return (
    <CartContext.Provider
      value={{
        addItem,
        deleteItem,
        updateQuantity,
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setcountProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
