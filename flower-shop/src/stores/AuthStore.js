import { makeAutoObservable } from 'mobx';

class AuthStore {
  isAuthenticated = true; // Initial state
  user = {};
  loading = false; // Loading state for fetching products
  error = null;

  constructor() {
    makeAutoObservable(this); // Automatically make state and actions observable
  }

  // Action to simulate sign in
  async signIn(username, password) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch('auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(username, password),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.user = data;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
      this.isAuthenticated = true;
    }
  };

  async signUp(name, username, password) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch('auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(name, username, password),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.user = data;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
      this.isAuthenticated = true;
    }
  }

  // Action to sign out
  signOut = () => {
    this.isAuthenticated = false;
    this.user = null;
  };
}

const authStore = new AuthStore();
export default authStore;
