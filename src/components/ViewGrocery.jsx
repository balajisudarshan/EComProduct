import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const ViewGrocery = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
        })
        .catch(error => console.error('Error fetching product:', error));
    }, [id]);
  
    if (!product) {
      return (/* From Uiverse.io by mrpumps31232 */ 
        <div class="loading-wave">
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
        </div>
        ) // Display a loading message while fetching
    }
  
    return (
      <div className="product-container">
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-category">Category: <strong>{product.category}</strong></p>
          <p className="product-price">Price: <strong>${product.price.toFixed(2)}</strong></p>
          <p className="product-rating">Rating: <strong>{product.rating} / 5</strong></p>
        </div>
      </div>
    );
}

export default ViewGrocery
