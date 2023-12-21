import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Update(){
   
    const {id} = useParams();
    const [values,setvalues] = useState({
        id:id,
        title:'',
        price:'',
  
    })
    useEffect(()=>{
        axios.get("http://localhost:9000/products/"+id)
        .then(res=>{
            setvalues({...values,title:res.data.title,price:res.data.price})
        })
        .catch(res=>console.log(res))
    },[])
    const navigation = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:9000/products/"+id,values)
        .then(res=>{
            navigation('/about');
        })
        .catch(res=>console.log(res))

    }
    
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <form  onSubmit={handleSubmit}>
                
                    <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" placeholder="Enter Title" 
                    value={values.title} onChange={e=>setvalues({...values,title:e.target.value})}
                    />
                    </div>
                    <div>
                    <label htmlFor="title">Price</label>
                    <input type="number" name="price" className="form-control" placeholder="Enter Price" 
                    value={values.price} onChange={e=>setvalues({...values,price:e.target.value})}
                    />
                    </div>
                    <button className="btn btn-info mt-3">Edit</button>
                </form>
            </div>
        </div>
    )
}
export default Update;