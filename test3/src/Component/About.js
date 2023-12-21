import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function About() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        getallproducts()
    }, [])
    const getallproducts = () => {
        fetch('http://localhost:9000/products')
            .then(res => res.json())
            .then((data) => {
                setproducts(data)
            });
    }

    const deteleproducts = (product) => {
        Swal.fire({
            title: `Are You Sure Delete ${product.title}?`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: 'DELETE'
                }).then((res) => res.json())
                    .then((data) => {

                        getallproducts()

                    })
            }
        })

    }
    return (
        <>
            <h1>About Products Page</h1>
            <Link to={'/addproduct'} className="btn btn-success mt-3 ms-2 px-3 py-2">Add New Product</Link>
            <Link to={'/home'} className="btn btn-dark mt-3 ms-2 px-3 py-2">Back To Home</Link>
            <table class="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}$</td>
                                <td>
                                    <button className="btn btn-danger ms-2 px-3 py-2" onClick={() => deteleproducts(product)}>Delete</button>
                                    <Link to={`/view/${product.id}`} className="btn btn-info ms-2 px-3 py-2">View</Link>
                                    <Link to={`/update/${product.id}`} className="btn btn-primary ms-2 px-3 py-2">Edit</Link>
                                </td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
        </>
    )
}
export default About;