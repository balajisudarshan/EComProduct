import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/ViewProduct.css'
const ViewProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Display a loading message while fetching
  }

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-category">Category: <strong>{product.category}</strong></p>
        <p className="product-price">Price: <strong>${product.price.toFixed(2)}</strong></p>
        <p className="product-rating">Rating: <strong>{product.rating.rate} / 5</strong></p>
      </div>
    </div>
  );
  
  
};

export default ViewProduct;