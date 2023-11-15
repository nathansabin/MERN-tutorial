import {useState} from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
    return (
        <div className='header mt-3'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col'>
                    <h1>Header</h1>
                    </div>
                    <div className='col-auto mt-2'>
                        <div className="btn-group">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul show className="dropdown-menu">
                            <li className='dropdown-item'>Login</li>
                            <li className='dropdown-item'>Logout</li>
                            <li className='dropdown-item'>Home</li>
                        </ul>         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;