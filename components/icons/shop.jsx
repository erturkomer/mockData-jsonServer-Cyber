import React from 'react';
import ShopIcon from '../../src/assets/shop.svg';

const Shop = ({ cartItemCount }) => {
  console.log("Sepet İçerik Sayısı:", cartItemCount); // prop'u konsola yazdır
  return (
    <div>
      <img src={ShopIcon} alt="icon bulunamadi{yuklenemedi}." />
      {/* Sepet ikonunun yanında sepete eklenen ürün sayısını gösterin */}
      <div>{cartItemCount}</div>
    </div>
  );
};

export default Shop;