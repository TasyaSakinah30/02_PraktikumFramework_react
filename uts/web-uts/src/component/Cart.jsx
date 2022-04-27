import React from "react";
import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {delItem} from '../component/index';

function Cart() {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    // const [cartArray, findListOfItems] = useState([])
    
    //     fetch('http://localhost:3001/posts')
    //         .then(response => response.json())
    //         .then(cartItemArray => {
    //             cartArray = cartItemArray;
    //             renderAllCartItem(cartArray)
    //         })
        
    //     function renderAllCartItem(cartItemArray){
    //         cartItemArray.forEach(cartItem => renderCartItem(cartItem) 
    //             );
    //     }
    //     function renderCartItem(cartItem){
    //         const newLi = document.createElement("Li")
    //         newLi.innerHTML = `
    //         <p id="pTag"> ${cartItem.posts.title}: $${cartItem.p.price}
    //         <button class="delete-button">
    //         <span>remove</span>
    //         </button>
    //         </p>`
    //         findListOfItems.append(newLi)
    //     }
    useEffect(() => {
        fetch('http://localhost:3002/posts')
            .then((response) => response.json())
            .then((result) => setCart(result))
            .catch((err) => console.log(err))
    },[]);

    function addtocart(item) {
        let cart2 = [...cart]
        cart2.push({...item})
        products.map((i) => {
            if (i.id == item.id) {
                i.cart = true
            }
        })
        setCart(cart2)
    }
    function removetocart(item) {
        let cart2 = cart.filter((i) => i.id != item.id)
        products.map((i) => {
            if (i.id == item.id) {
                i.cart = false
            }
        })
        setCart(cart2)
    }
    function increase(item) {
        let x = cart.map((i) => {
            if (item.id == i.id) {
                console.log('hola')
                i.quantity += 1
            }
            return i
        })
        setCart(x)
    }
    function decrease(item) {
        let x = cart.map((i) => {
            if (item.id == i.id && i.quantity > 1) {
                console.log('hola')
                i.quantity -= 1
            }
            return i
        })
        setCart(x)
    }
    function total(){
        let x = 0
        cart.map((i) => {
            x += i.price * i.quantity
        })
        return x
    }
    return (
        <div className="container">
            {/* <div className="row">
                {products.map((item) => (
                    <div className="col-3" key={item.id}>
                        <div className="card">
                            <img src={item.img} className="card-img-top"/>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {item.title} - {item.price}
                                </h6>
                                {
                                    item.cart == false
                                    &&
                                    <button className='btn btn-primary' onClick={() =>
                                    addtocart(item)}>
                                        Add to cart
                                    </button>
                                }
                                {
                                    item.cart == true
                                    &&
                                    <button className='btn btn-success' onClick={() =>
                                        addtocart(item)}>
                                            Added
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <div>
                <div className="row">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((i, index) => (
                                    <tr key={i.id}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="row">
                                            <img src={i.img} style={{ widt: '4rem' }}/>
                                        </th>
                                        <td>{i.title}</td>
                                        <td>
                                            {i.price}
                                        </td>
                                        <td>
                                            <button onClick={() => decrease(i)}
                                            className="btn btn-primary btn-sm">
                                                -
                                            </button>
                                            {i.quantity}
                                            <button onClick={() => increase(i)}
                                            className="btn btn-primary btn-sm"
                                            size="sm">
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => removetocart(i)}
                                            className="btn btn-danger">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                    <div className="row">
                        <div className="col">
                            <h4>TOTAL: Rp {total()}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // const state = useSelector((state) => state.addItems)
    // const dispatch = useDispatch()
    // const handleClose = (item) => {
    //     dispatch(delItem(item))
    // }
    // const cartItems = (cartItem) => {
    //     return(
    //         <div className="px-4">
    //             <div className="container">
    //                 <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="close"></button>
    //                 <div className="row justify-content-center">
    //                     <div className="col-md-4">
    //                         <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px"/>
    //                     </div>
    //                     <div className="col-md-4">
    //                         <h3>{cartItem.title}</h3>
    //                         <p className="lead"></p>
    //                     </div>
    //                 </div>
    //             </div>
    //     </div>
    //     )
        
    // }
    
    // return (
    //     <>
            
    //         {state.length !== 0 && state.map(cartItems)}
            
    //     </>
    // )
}

export default Cart;