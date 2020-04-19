import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./Navbar";
import Products from "./Products";
import { CartProvider } from "./CartProvider";

const Home = () => <h1>Trang chủ</h1>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/Products/" component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}
