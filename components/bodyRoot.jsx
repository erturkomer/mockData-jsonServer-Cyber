import React from "react";
import Header from "./header/header.jsx"
import Accordion from '../components/filter/accordion.jsx';
import Product from "../components/products/product.jsx";
import Footer from "../components/footer/footer.jsx";

const bodyRoot = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="accordion-container">
          <Accordion name="Brand" />
          <Accordion name="Battery capacity" />
          <Accordion name="Screen type" />
          <Accordion name="Screen diagonal" />
          <Accordion name="Protection class" />
          <Accordion name="Built-in memory" />
        </div>
        <div className="products-inner-container">
          <div className="top-part">
            <p>Selected Products: <span>21</span></p>
            <p>By rating</p>
          </div>
          <div className="products-container">
          <Product/>
          </div>
        </div>
      </div>
      <Footer />

      
    </>
  )
};

export default bodyRoot;
