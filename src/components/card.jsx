import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/Cart";

const Card = ({ im, cmp, mod, pric, showAddedModal }) => {
  const { items, setItems } = useContext(CartContext);

  const handleCart = () => {
    // Here, we are looking if an item is already is present in the cart
    // if it is present then we are storing it in the existingItem
    const existingItem = items.find(
      //here items.find will find those items which have same brand/company name and same model and returning it
      (item) => item.cmp === cmp && item.mod === mod
    );

    // If the item is already in the cart, increment its quantity
    if (existingItem) {
      // we are storing the new array in updateItemList. Here, the map() fill update those items which already exists in the array.
      const updateItemList = items.map(
        (item) =>
          //the condition for checking if the items are present or not
          item.cmp === cmp && item.mod === mod
            ? // Use the spread operator (...) to create a new object with the same properties as the existing item,
              { ...item, qnt: item.qnt + 1 } // but with an increased quantity by 1
            : item // Return the item as is
      );
      showAddedModal();
      // Update the items state with the updatedItems array
      setItems(updateItemList);
    } else {
      // If the item is not in the cart, add it to the cart with a quantity of 1
      setItems([...items, { cmp, mod, pric, qnt: 1 }]);
      showAddedModal();
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="bg-[#1d1d1d] mt-4 h-55 flex flex-col justify-center items-start rounded-md p-6 text-2xl md:mx-2">
      <div className="w-32  mx-auto">
        <img src={im} alt="Shoe" />
      </div>
      <div className="mx-auto mt-2">
        <p>Brand: {cmp}</p>
        <p>Model: {mod}</p>
        <p>Price: {pric}</p>
      </div>
      <div className="mt-4 flex justify-center">
        {/* <button className="mx-1 border-green-500 border-2 px-4 rounded-md font-semibold hover:bg-green-500">
          Buy Now
        </button> */}
        <button
          className="mx-1 px-4 bg-green-500 border-green-500 border-2 rounded-md font-semibold hover:bg-transparent"
          onClick={handleCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
