import React, { useState, useEffect } from 'react';
import './styles/Products.css';
import { Link } from 'react-router-dom'; 

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []); // Add an empty dependency array
  if (products.length === 0) {
    return (
      <div className="loading-container"> {/* New wrapper for centering */}
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className='productContainer'>
      {products.map((item) => (
        <div className="card" key={item.id}> {/* Add a key for each card */}
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          <p>Price: ${item.price}</p>
          <Link to={`/productDetails/${item.id}`}>View Product</Link> {/* Correct link to product details */}
        </div>
      ))}
    </div>
  );
}

export default Products;