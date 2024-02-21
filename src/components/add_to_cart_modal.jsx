import React from "react";

const AddedModal = () => {
  return (
    <div className="fixed z-40 bottom-4 bg-green-500 w-64 rounded-md px-4 py-2 md:w-full md:rounded-none md:bottom-0">
      <p className="text-2xl text-white text-center">Item Added to Cart!</p>
    </div>
  );
};

export default AddedModal;
