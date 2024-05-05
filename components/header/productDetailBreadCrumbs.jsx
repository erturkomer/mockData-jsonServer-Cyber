import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

const ProductDetailBreadCrumbs = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="bread-crumb">
                <ul>
                    <li>Home <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
                    </svg>
                    </li>
                    <li>Catalog <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
                    </svg>
                    </li>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li>Smartphones <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
                        </svg></li>
                    </Link>
                    <li>Apple <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
                    </svg></li>
                    <li>{product.model}</li>
                </ul>
            </div>
        </>
    );
};

export default ProductDetailBreadCrumbs;