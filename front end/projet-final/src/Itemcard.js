import React from "react";
import { useCart } from "react-use-cart";

export default function Itemcard(props) {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top" />
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-title">{props.price}Da</h5>
          <p class="card-text">{props.desc}</p>
          <button class="btn btn-success" onClick={() => addItem(props.item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
