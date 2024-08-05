import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";
import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    fetch("https://localhost:8000/Produit")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => console.log(data)) // Handle the data
      .catch((error) => console.error("Error:", error)); // Handle errors
  }, []);
  return (
    <>
      <h1 className="text-center mt-3">Mes Produits</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
