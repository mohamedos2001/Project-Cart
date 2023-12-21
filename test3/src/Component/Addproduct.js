import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addproduct() {
    const [title,settitle] = useState('');
    const [price,setprice] = useState(0);
    let navigation = useNavigate();
    const FormSubmit = (e)=>{
       
        e.preventDefault();
        axios.post("http://localhost:9000/products",{
            title,
            price 
        }).then((data)=>{
            console.log(data)
            navigation('/about');
        })
        
    }
    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={FormSubmit}>
                <div className="mb-3">
                    <label htmlFor="product Title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="product Title" placeholder="Product Title" aria-describedby="emailHelp"
                    onChange={(e)=>settitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" placeholder="Product Price" id="productPrice"
                    onChange={(e)=>setprice(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    )
}
export default Addproduct