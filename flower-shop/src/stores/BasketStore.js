// src/stores/BasketStore.js

import { makeAutoObservable } from 'mobx';

class BasketStore {
  items = []; // Array to hold items in the basket
  products = []; // Array to hold available products
  loading = false; // Loading state for fetching products
  error = null; // Error state for fetching products

  items = [
    { id: 1, name: 'Rose', category: 'Flower', price: 10, image: 'rose.jpg' },
    { id: 2, name: 'Tulip', category: 'Flower', price: 8, image: 'tulip.jpg' },
    { id: 3, name: 'Sunflower', category: 'Flower', price: 12, image: 'sunflower.jpg' },
    { id: 4, name: 'Lily', category: 'Flower', price: 9, image: 'lily.jpg' },
    // More products...
  ];

  constructor() {
    makeAutoObservable(this); // Automatically detect observables and actions
  }

  // Add an item to the basket
  addItem(item) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if item exists
    } else {
      this.items.push({ ...item, quantity: 1 }); // Add new item with quantity 1
    }
  }

  // Remove an item from the basket
  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  // Update the quantity of an item
  updateQuantity(itemId, quantity) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  // Clear the basket
  clearBasket() {
    this.items = [];
  }

  // Fetch products from an API
  async fetchProducts() {
    /*this.loading = true;
    this.error = null;

    try {
      const response = await fetch('https://example.com/api/products'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.products = data; // Assuming the API returns an array of products
    } catch (error) {
      this.error = error.message; // Handle any errors
    } finally {
      this.loading = false;
    }*/
  }

  // Get total items in the basket
  get totalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Get total price of the items in the basket
  get totalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

// Create an instance of the store
const basketStore = new BasketStore();
export default basketStore;
