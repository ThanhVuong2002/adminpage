// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import Sidebar from './Components/Admin/Sidebar';
// import Menu from './Components/Admin/Menu';
// import Content from './Components/Admin/Content';
// import ShowShops from './Components/Admin/ShowShops';
// import ShowProducts from './Components/Admin/ShowProducts';
// import ShowUsers from './Components/Admin/User';
// import AdminPage from './Components/Admin/Adminpage';

// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <AdminPage />
//     </div>
//   );
// }



// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Components/Home/Header";
import Content from "./Components/Home/Content";
import Footer from "./Components/Home/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Shops from "./Components/Shops/Shops";
import ShopDetails from "./Components/Shops/ShopDetails";
// import Cart from "./Components/Cart/Cart";
import { QueryClient, QueryClientProvider } from "react-query";
// import ProductDetail from "./Components/Shops/ProductDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />

          {/* shop */}
          <Route path="shops" element={<Shops/>} />
          <Route path="shopDetails/:id" element={<ShopDetails/>} />
          {/* <Route path="ProductDetail/:id" element={<ProductDetail/>}/> */}
          {/* <Route path="cart" element={<Cart/>} /> */}
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;