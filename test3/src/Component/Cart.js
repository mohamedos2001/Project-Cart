import { Button, Container, Image } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart ,Clear} from '../rtk/slices/cart-slice';
import { Link } from "react-router-dom";
function Cart(){
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch();
    const totalprice  = cart.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc;
    },0)
    
    return(
        <Container>
            <h1 className="py-5"> Welcome to Cart</h1>
            <Button  className="btn btn-dark ms-2 px-3 py-2" onClick={()=>dispatch(Clear())}>Clear</Button>
            <h5>Total Price: {totalprice.toFixed(2)}$</h5>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td><Image src={product.image} style={{height:"100px",width:"100px"}}/></td>
            <td>{product.price}$</td>
            <td>{product.quantity}</td>
            <td>
              <Button className="btn btn-danger ms-2 px-3 py-2" onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button>
              
              
            </td>
          </tr>
        ))}
        
      </tbody>
    </Table>
    <Link to={'/products'} className="btn btn-dark ms-2 px-3 py-2">Back To Products</Link>

        </Container>
    )
}
export default Cart