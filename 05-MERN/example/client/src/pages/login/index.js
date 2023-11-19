import React from 'react';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Login() {
    return (
        <div className='login mt-3'>
        <div className='container'>
            <h1 className='col-12'>Login</h1>
            <form className='col col-vert'>
                <input type="text" className='col-12 col-lg-8 mb-2'></input>
                <input type="text" className='col-12 col-lg-8 mb-3'></input>
                <input type="submit" className='col-8 col-lg-6 btn btn-primary button'></input>
            </form>
        </div>
        </div>
    );
}
 
export default Login;