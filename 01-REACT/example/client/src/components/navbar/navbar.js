import React, {useState, useContext} from 'react';
import "./navbar.css";

const Navbar = ({onDataReceived}) => {
    const [page, setPage] = useState("useEffect");

    const navClick = (event) => {
        const newPage = event.target.id;
        setPage(newPage);
        onDataReceived(page);
    }; 

    return (
        <div>
            <ol>
                <li id="useEffect" onClick={navClick}
                style={{ color: page === "useEffect" ?  "white" : "black" }}
                >use effect</li>
                <li id="useState" onClick={navClick}
                style={{ color: page === "useState" ?  "white" : "black" }}
                >use state</li>
                <li id="useContext" onClick={navClick}
                style={{ color: page === "useContext" ?  "white" : "black" }}
                >use context</li>
            </ol>
        </div>
    );
};

export default Navbar;