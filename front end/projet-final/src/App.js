import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Footer from "./Components/Navbar/Footer/Footer";
import Hero from "./Hero";

function App() {
  
  return (
    <>
      <CartProvider>
        <Navbar />
        <Hero />
        <Home />
        <Cart />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
