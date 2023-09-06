import React, { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext(null);
const CartContextProvider = ({ children }) => {

  const cartLocalStorage = JSON.parse(localStorage.getItem('cart')) ?? []

  const [allProducts, setAllProducts] = useState(cartLocalStorage);
  const [total, setTotal] = useState(0);
  const [countProducts, setcountProducts] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(allProducts))
  }, [allProducts])


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
      localStorage.setItem('cart', JSON.stringify(allProducts))
      console.log('Added item first time')
    }
  };

  const deleteItem = (itemId) => {
    const allProductsUpdated = allProducts.filter((item) => item.id != itemId)
    setAllProducts(allProductsUpdated)
    localStorage.setItem("cart", JSON.stringify(allProducts));
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
    localStorage.setItem("cart", JSON.stringify(allProducts));
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
        toast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
