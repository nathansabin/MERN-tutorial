import {useState} from 'react';
import { Link } from "react-router-dom";
import './header.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
    return (
        <div className='header w-100'>
            <div className='container-fluid'>
                <div className='row w-100 justify-content-between'>
                    <div className='col'>
                    <h1>Header</h1>
                    </div>
                    <div className='col-auto mt-2'>
                        <div className="btn-group button">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul show className="dropdown-menu">
                            <a href="/login"><li className='dropdown-item'>Login</li></a>
                            <a href="/logout"><li className='dropdown-item'>Logout</li></a>
                            <a href="/home"><li className='dropdown-item'>Home</li></a>
                        </ul>         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;