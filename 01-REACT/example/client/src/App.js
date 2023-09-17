import React, {useState} from "react";
import Header from "./components/header/"
import Footer from "./components/footer/"
import Navbar from "./components/navbar/";
import './App.css';

function App({ onDataReceived }) {
  const [page, setPage] = useState("useEffect");

  const handleNav = (data) => {
    setPage(data)
    console.log(page)
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
