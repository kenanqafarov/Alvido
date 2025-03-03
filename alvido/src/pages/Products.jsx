import React, { useEffect, useState } from "react";

// Style
import "../style/components_style/ProductsComponents/products.css";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Icons
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoMdBasket } from "react-icons/io";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);

  useEffect(() => {
    fetch("https://dummyjson.com/c/c54e-2a02-4091-b123")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (category ? product.category === category : true) &&
        product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  }, [search, category, maxPrice, products]);

  return (
    <>
      <Header />
      <h1 className="title">
        Our <span>Products</span>
      </h1>
      <div className="products-container">
        <div className="leftPart">
          <h3>Filter Products</h3>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="gaming">Gaming</option>
            <option value="electronics">Electronics</option>
            <option value="toys">Toys</option>
          </select>
          <input
            type="range"
            min="0"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <p>Max Price: ${maxPrice}</p>
        </div>
        <div className="rightPart">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product" key={product.id}>
                <img
                  className="product-img"
                  src={product.img}
                  alt={product.name}
                />
                <div className="bottomPart">
                  <p className="productName">{product.name}</p>
                  <p className="productPrice">{product.price}$</p>
                </div>
                <div className="iconsPart">
                  <RiShoppingCart2Fill className="product-icon" />
                  <IoMdBasket className="product-icon" />
                </div>
              </div>
            ))
          ) : (
            <p>No products found...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
