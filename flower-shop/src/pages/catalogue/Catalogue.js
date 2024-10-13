import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import basketStore from '../../stores/BasketStore';
import './styles.css';

const Catalogue = observer(() => {

  
  // Sample list of products
  const products = [
    { id: 1, name: 'Rose', category: 'Flower', price: 10, image: 'rose.jpg' },
    { id: 2, name: 'Tulip', category: 'Flower', price: 8, image: 'tulip.jpg' },
    { id: 3, name: 'Sunflower', category: 'Flower', price: 12, image: 'sunflower.jpg' },
    { id: 4, name: 'Lily', category: 'Flower', price: 9, image: 'lily.jpg' },
    // More products...
  ];

  // State for filters
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 20]);

  // Function to handle filtering logic
  const filteredProducts = products.filter(product => {
    return (
      (category === 'All' || product.category === category) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Handle category and price change
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (min, max) => setPriceRange([min, max]);

  return (
    <div className="catalogue">
      {/* Filters Section */}
      <div className="filters">
        <h2>Filters</h2>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for flowers..."
        />

        {/* Category Filter */}
        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Flower">Flower</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label>Price Range:</label>
          <input
            type="range"
            min="0"
            max="50"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
          />
          <span>${priceRange[0]} - ${priceRange[1]}</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <button >Add to cart</button>
              <button >Remove from cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
});

export default Catalogue;
