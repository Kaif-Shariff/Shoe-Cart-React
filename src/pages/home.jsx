import React, { useState } from "react";
import Card from "../components/card";

import shoeData from "../data/data.json";
import AddedModal from "../components/add_to_cart_modal";

const Home = () => {
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    setModalState(true);

    setTimeout(() => {
      setModalState(false);
    }, 500);
  };
  return (
    <>
      <section className="mt-10 flex items-center justify-center flex-wrap md:justify-start md:mx-auto">
        {shoeData ? (
          shoeData.map((shoe, index) => (
            <Card
              key={index}
              im={shoe.image}
              cmp={shoe.company}
              mod={shoe.model}
              pric={shoe.price}
              showAddedModal={handleModal}
            />
          ))
        ) : (
          <h1>Website under maintenance</h1>
        )}

        {modalState && <AddedModal />}
      </section>
    </>
  );
};

export default Home;
