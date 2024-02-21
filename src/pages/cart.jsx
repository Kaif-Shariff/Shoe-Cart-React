import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const { items } = useContext(CartContext);
  const total = items.reduce(
    (acc, itm) => acc + parseInt(itm.pric * itm.qnt),
    0
  );
  return (
    <div>
      <div className=" flex items-center justify-center flex-col bg-black">
        <p>Cart Total: {total}</p>
      </div>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="bg-[#1f1f1f] mt-10 mx-auto">
            <p>Brand: {item.cmp}</p>
            <p>Model: {item.mod}</p>
            <p>
              Price: {item.pric} X {item.qnt}
            </p>
          </div>
        ))
      ) : (
        <div className="text-center mx-auto mt-20">No Items in the cart</div>
      )}
    </div>
  );
};

export default Cart;
