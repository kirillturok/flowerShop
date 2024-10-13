import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import basketStore from '../../stores/BasketStore';
import './styles.css';

const Basket = observer(() => {
  useEffect(() => {
    basketStore.fetchProducts(); // Fetch products when the component mounts
  }, []);

  if (basketStore.loading) {
    return <div>Loading products...</div>;
  }

  if (basketStore.error) {
    return <div>Error: {basketStore.error}</div>;
  }

    //const total = basket.reduce((acc, item) => acc + item.price, 0);
  
    return (
      <div className="basket">
        {basketStore.items.map(item => (
          <div key={item.id} className="basket-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => basketStore.removeItem(item.id)}>Remove</button>
          </div>
        ))}
        <h2>Total: ${0}</h2>
        <button>Place Order</button>
      </div>
    );
  });

  export default Basket;
  