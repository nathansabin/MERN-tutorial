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

export const page = createContext();

function App() {
  const [page, setPage] = useState("login");
  return (
    <div className="App">
      <page.provider value={[page, setPage]}>
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
      </page.provider>
    </div>
  );
}

export default App;
