import React, { useState } from 'react';

const Admin = ({ products, orders, addProduct, removeProduct }) => {
    const [newProduct, setNewProduct] = useState({ name: '', price: 0 });
  
    return (
      <div className="admin">
        <h1>Manage Products</h1>
        <ul>
          {products && products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <h2>Add New Product</h2>
        <input
          type="text"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Price"
        />
        <button onClick={() => addProduct(newProduct)}>Add Product</button>
  
        <h1>Manage Orders</h1>
        {orders && orders.map(order => (
          <div key={order.id} className="admin-order">
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Admin;
  