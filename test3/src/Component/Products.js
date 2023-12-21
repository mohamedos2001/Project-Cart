import React from "react"
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setfilter] = useState(data)
    const [loading, setloader] = useState(false);
    let componentmounted = true;
    useEffect(() => {
        const getproducts = async () => {
            setloader(true);
            const res = await fetch("http://localhost:9000/products");
            if (componentmounted) {
                setData(await res.clone().json());
                setfilter(await res.json());
                setloader(false);
                console.log(filter);
                
            }
            return () => {
                componentmounted = false;
            }
        }
        getproducts()
    }, []);
    
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>

            </>
        )
    }
    const filterProduct = (cat)=>{
        const updateList = data.filter((x)=>x.category === cat);
        setfilter(updateList);
    }
   
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2"onClick={()=>setfilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">{product.price}$</p>
                                        <Link to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                                        
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </>
        )

    }
    return (
        <div>

            <div className="container my-5 py-5" >
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    )
}
export default Products