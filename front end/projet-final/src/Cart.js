import React from "react";
import { useCart } from "react-use-cart";
import { useEffect } from "react";

export default function Cart() {
  const {
    items,
    removeItem,
    updateItemQuantity,
    isEmpty,
    totalItems,
    cartTotal,
    totalUniqueItems,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  useEffect(() => {
    // Fetch cart items from the backend
    fetch("http://localhost:5000/api/cart")
      .then((response) => response.json())
      .then((items) => setCartItems(items))
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total Items : ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price : {cartTotal} Da </h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="btn btn-primary m-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
}
