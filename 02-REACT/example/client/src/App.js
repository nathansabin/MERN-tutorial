import React, {useState, useEffect, createContext} from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Navbar from "./components/navbar";
import Selector from "./utils/selector";
import './App.css';

export const colorContext = createContext(); 

function App({ onDataReceived }) {
  const [page, setPage] = useState("useEffect");
  const [color, setColor] = useState(true);

  const handleNav = (data) => {
    setPage(data)
  };
  useEffect(() => {
    handleNav(onDataReceived)
  }, [onDataReceived])
  return (
    <div className="wrapper">
      <Header/>
      <Navbar onDataReceived={handleNav}/>
      <colorContext.Provider value={[color, setColor]}>
        <Selector selection={page}/>
        <Footer fontColor={color}/>
      </colorContext.Provider>
    </div>
  );
}

export default App;
