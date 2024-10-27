import React, { useState, useEffect } from "react";
import './styles/AllProducts.css'
import { Link } from "react-router-dom";
const Groceries = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Access the products array
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Check if products array is empty
  if (products.length === 0) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="productContainer">
      {products.map((item) => (
        <div className="card" key={item.id}> {/* Add a key for each card */}
          <img src={item.thumbnail} alt={item.name} />
          <h3>{item.title}</h3> {/* Display product name or other details */}
          <p>{item.category}</p>
          <p>{item.price}</p> {/* Display product price */}
          <Link to={`/groceryDetails/${item.id}`}>View Product</Link>
        </div>
      ))}
    </div>
  );
};

export default Groceries;
