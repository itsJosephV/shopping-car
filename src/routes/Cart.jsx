import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const [total, setTotal] = useState(0);

  const { allProducts, deleteItem, updateQuantity } = useContext(CartContext);

  // useEffect(() => {
  //   const calculateTotal = allProducts.reduce((curr, item) => {
  //     curr + item.quantity * item.price
  //   })
  //   setTotal(calculateTotal)
  // }, [allProducts]);

  console.log(allProducts);

  return (
    <div>
      {allProducts.map((item) => (
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
          </div>
          <button onClick={() => deleteItem(item.id)}>X</button>
        </div>
      ))}
      {/* <p>total a pagar: {total}</p> */}
    </div>
  );
};

export default Cart;
