import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const Home = () => {
    const cart = useSelector(state => state.cart);
    return (
        <>
        <div>
            <nav  className="navbar navbar-expand-lg bg-body-tertiary py-3 bg-white shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to="/home">Shopping Cart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/" className="btn btn-outline-dark">
                               <i className="fa fa-sign-in me-1"></i> Login</Link>
                            <Link to="/register" className="btn btn-outline-dark ms-2">
                               <i className="fa fa-user-plus me-1"></i> Register</Link>
                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                               <i className="fa fa-shoppinf-cart me-1"></i> Cart - {cart.length}</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src="https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img" alt="..."
                height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
                
                
            </div>
            <Products/>

        </div>
        </>
    )
}
export default Home;