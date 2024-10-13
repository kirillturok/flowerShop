import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from './pages/catalogue/Catalogue';
import Basket from './pages/basket/Basket';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import Main from './pages/main/Main';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
