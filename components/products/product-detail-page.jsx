import React from "react";
import ProductDetail from "./product_detail";
import Header from "../header/productDetailHeader";
import Breadcrumbs from "../header/breadcrumbs";
import Footer from "../footer/footer";

const productDetailPage = () => {
  return (
    <>
    <Header/>
    <ProductDetail/>
    <Footer/>
    </>
  )
};

export default productDetailPage;
