import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { AddToCart } from '../rtk/slices/cart-slice';
const View = ()=>{
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        const getProduct= async()=>{
            setLoading(true);
            const res = await fetch(`http://localhost:9000/products/${id}`);
            setProduct(await res.json());
            setLoading(false);
        }
        getProduct();
    },[]);
    const Loading = ()=>{
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6"style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div>
            </>
        )
    }
    const ShowProduct = ()=>{
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title}height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">{product.price}$</h3>
                    <p className="lead">{product.description}</p>
                    
                </div>
            </>
        )
    }
    return(
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/>:<ShowProduct/>}
                </div>
            </div>

        </div>
    )
}
export default View;