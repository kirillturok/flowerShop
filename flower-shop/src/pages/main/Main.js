import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite'; // MobX observer
import authStore from '../../stores/AuthStore'; // Import the AuthStore
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './styles.css';

const MainPage = observer(() => {
  const { isAuthenticated, signIn, signOut } = authStore;

  const navigate = useNavigate(); // Create navigate function

  // Simulate sign in/sign out actions
  const handleSignIn = () => signIn();
  const handleLogout = () => signOut();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Flower Shop</Link>
        </div>

        {/* Conditionally render buttons based on user authentication */}
        <div className="nav-links">
          {!isAuthenticated ? (
            <>
              <button onClick={()=>navigate('sign-in')}>Sign In</button>
              <button onClick={()=>navigate('sign-up')}>Sign Up</button>
            </>
          ) : (
            <>
              <button onClick={()=>navigate('basket')}>Basket</button>
              <button onClick={()=>navigate('profile')}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the Flower Shop</h1>
        <p>Browse our beautiful collection of flowers and place your order today!</p>
        <Outlet />
      </div>
    </div>
  );
});

export default MainPage;
