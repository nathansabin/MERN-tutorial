import React, {useState} from "react";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar";
import './App.css';

function App() {
  const [page, setPage] = useState("useEffect");

  const handleNav = (data) => {
    setPage(data)
  };

  return (
    <div className="wrapper">
      <Header/>
      <Navbar onDataReceived={handleNav}/>
      <Footer/>
    </div>
  );
}

export default App;
