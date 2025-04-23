import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaShoppingCart, FaHeart, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../style/components_style/ProductsComponents/products.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
        const uniqueBrands = [...new Set(res.data.products.map(p => p.brand))];
        const uniqueCategories = [...new Set(res.data.products.map(p => p.category))];
        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    let filtered = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedBrand ? p.brand === selectedBrand : true) &&
      (selectedCategory ? p.category === selectedCategory : true) &&
      (selectedRating ? Math.floor(p.rating) === selectedRating : true)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [search, selectedBrand, selectedCategory, selectedRating, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <div className="products-wrapper">
      <aside className="filter-panel">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-section">
          <h4>Rating</h4>
          {[5, 4, 3, 2, 1].map(star => (
            <div
              key={star}
              className={`custom-box ${selectedRating === star ? 'active' : ''}`}
              onClick={() => setSelectedRating(selectedRating === star ? null : star)}
            >
              {Array(star).fill().map((_, i) => <FaStar key={i} className="star" />)}
            </div>
          ))}
        </div>

        <div className="filter-section">
          <h4>Brands</h4>
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`custom-box ${selectedBrand === brand ? 'active' : ''}`}
              onClick={() => setSelectedBrand(selectedBrand === brand ? "" : brand)}
            >
              {brand}
            </div>
          ))}
        </div>

        <div className="filter-section">
          <h4>Categories</h4>
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`custom-box ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
            >
              {cat}
            </div>
          ))}
        </div>
      </aside>

      <main className="product-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p className="price">${product.price}</p>
              <div className="actions" onClick={(e) => e.stopPropagation()}>
                <button><FaShoppingCart /></button>
                <button><FaHeart /></button>
                <Link to={`/products/${product.id}`} className="buy-now">
                  Purchase Now <FaArrowRight />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">
            <div className="no-products-anim">
              <div className="box" />
              <div className="box" />
              <div className="box" />
            </div>
            <h2>No Products Found</h2>
            <p>Try adjusting your filters or searching with a different keyword.</p>
          </div>
        )}

        {filteredProducts.length > productsPerPage && (
          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
    </>
  );
};

export default Products;
