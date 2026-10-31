import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";


function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      setError("Failed to load products. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);
  return (
  <div>
    <h1>ShopSphere Products</h1>
    <p>Explore our available products.</p>

    {loading && <p>Loading products...</p>}

    {error && <p>{error}</p>}

    {!loading && !error && (
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: Rs. {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Available Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default Products;