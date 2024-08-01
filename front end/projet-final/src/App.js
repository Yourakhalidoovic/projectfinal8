import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Cart from "./Cart";

import { CartProvider } from "react-use-cart";
import Footer from "./Components/Navbar/Footer/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Home />
        <Cart />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
