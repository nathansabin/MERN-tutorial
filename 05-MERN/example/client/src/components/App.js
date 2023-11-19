import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import {
  Home,
  Login,
  Buy,
  Sell,
  History
} from "../pages";


function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/home"
              element={<Home/>}
            />
            <Route
              path="/buy"
              element={<Buy/>}
            />
            <Route
              path="/sell"
              element={<Sell/>}
            />
            <Route
              path="/history"
              element={<History/>}
            />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
