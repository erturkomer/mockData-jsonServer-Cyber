import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteColors, setFavoriteColors] = useState({}); // Her ürün için ayrı renk durumu


  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        const initialColors = response.data.reduce((acc, product) => {
          // localStorage'dan favori rengi getir, eğer yoksa varsayılan olarak gri kullan
          const storedColor = localStorage.getItem(`favoriteColor_${product.id}`) || "gray";
          acc[product.id] = storedColor;
          return acc;
        }, {});
        setProducts(response.data);
        setFavoriteColors(initialColors);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Her favori rengi değiştiğinde, localStorage'e kaydedin
    Object.keys(favoriteColors).forEach(productId => {
      localStorage.setItem(`favoriteColor_${productId}`, favoriteColors[productId]);
    });
  }, [favoriteColors]);

  const indexOfLastProduct = currentPage * 9;
  const indexOfFirstProduct = indexOfLastProduct - 9;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / 9);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleFavorite = (productId) => {
    // Favori durumunu tersine çevir
    setFavoriteColors(prevColors => ({
      ...prevColors,
      [productId]: prevColors[productId] === "red" ? "gray" : "red"
    }));
  };

  return (
    <>
      {currentProducts.map(product => (
        <div key={product.id} className="product">
          <div style={{ display: 'flex', width: '234.33px', height: '32px', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '-35px', marginTop: '-20px' }}>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => toggleFavorite(product.id)}
              style={{ cursor: "pointer" }}
            >
              {/* Kenarlık */}
              <path
                d="M6.26765 18.5443L15.6487 27.3568C15.9732 27.6616 16.1354 27.814 16.3334 27.814C16.5314 27.814 16.6937 27.6616 17.0181 27.3568L26.3992 18.5443C29.0074 16.0941 29.3242 12.0621 27.1305 9.23475L26.718 8.70312C24.0938 5.32077 18.8263 5.88801 16.9823 9.75153C16.7218 10.2973 15.945 10.2973 15.6845 9.75153C13.8406 5.88801 8.57305 5.32077 5.94881 8.70312L5.53633 9.23475C3.34268 12.0621 3.65941 16.0941 6.26765 18.5443Z"
                stroke={favoriteColors[product.id]}
                strokeOpacity="0.77"
                strokeWidth="1.4"
              />
              {/* İç kısım */}
              {favoriteColors[product.id] === "red" && (
                <path
                  d="M6.26765 18.5443L15.6487 27.3568C15.9732 27.6616 16.1354 27.814 16.3334 27.814C16.5314 27.814 16.6937 27.6616 17.0181 27.3568L26.3992 18.5443C29.0074 16.0941 29.3242 12.0621 27.1305 9.23475L26.718 8.70312C24.0938 5.32077 18.8263 5.88801 16.9823 9.75153C16.7218 10.2973 15.945 10.2973 15.6845 9.75153C13.8406 5.88801 8.57305 5.32077 5.94881 8.70312L5.53633 9.23475C3.34268 12.0621 3.65941 16.0941 6.26765 18.5443Z"
                  fill="#FF0000" // Kırmızı dolgu rengi
                />

              )}
            </svg>
          </div>
          <Link to={`/product-details/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} />
          </Link >

          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
      <div className="pagination-container" style={{ marginLeft: '355px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          {/* Sayfalama düğmelerini oluştur */}
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              onClick={() => handlePageChange(index + 1)}
              style={{ fontFamily: 'SF Pro Display', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '5px', background: 'black', color: 'white', cursor: 'pointer', margin: '0 5px', fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default product;