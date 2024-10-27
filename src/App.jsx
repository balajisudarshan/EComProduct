import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Groceries from "./components/Groceries.jsx";
import Products from "./components/Products.jsx";
import ViewProduct from "./components/ViewProduct.jsx";
 // Import ViewProduct
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewGrocery from "./components/ViewGrocery.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/groceries" element={<Groceries />} />

        <Route path="/products" element={<Products />} /> {/* Ensure this path is correct */}
        <Route path="/productDetails/:id" element={<ViewProduct />} /> {/* Correct route for product details */}
        <Route path="/groceryDetails/:id" element={<ViewGrocery />} />
      </Routes>
    </Router>
  );
}

export default App;