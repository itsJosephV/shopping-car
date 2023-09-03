import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { allProducts, deleteItem, updateQuantity, total, setTotal } =
    useContext(CartContext);

  useEffect(() => {
    const calculateTotal = allProducts.reduce((curr, item) => {
      return curr + item.quantity * item.price; // Add "return" here
    }, 0); // Initialize with 0

    setTotal(calculateTotal);
  }, [allProducts]);

  // console.log(allProducts);

  return (
    <div>
      {allProducts.length === 0
        ? "empty cart"
        : allProducts.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
            >
              <p>{item.title}</p>
              <div>
                <p>quantity:</p>
                <select
                  name=""
                  id=""
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity({
                      id: item.id,
                      quantity: e.target.value,
                    })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div>
                  <p>subtotal: {item.quantity * item.price}</p>
                </div>
              </div>
              <button onClick={() => deleteItem(item.id)}>X</button>
            </div>
          ))}
      <p>total a pagar: {total}</p>
    </div>
  );
};

export default Cart;
