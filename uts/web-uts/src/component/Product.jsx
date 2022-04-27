import React, { Component, useState, useEffect } from "react";
// import { NavLink } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { addCart } from "./index";

class Product extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            price: "",
            desc: "",
            img: "",
            quantity: 1
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    // handleHapusArtikel = (data) => {
    //     fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
    //         .then(res => {
    //             this.ambilDataDariServerAPI()
    //         })
    // }

    // handleTambahArtikel = (event) => {
    //     let formInsertArtikel = {...this.state.insertArtikel};
    //     let timestamp = new Date().getTime();
    //     formInsertArtikel['id'] = timestamp;
    //     formInsertArtikel[event.target.name] = event.target.value;
    //     this.setState({
    //         insertArtikel: formInsertArtikel
    //     });
    // }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Product</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-around">
                        {
                            this.state.listArtikel.map(artikel => {
                                return <div class="card mb-4" key={artikel.id} style={{ width: "18rem" }}>
                                    <img src={artikel.img} class="card-img-top" alt={artikel.title} />
                                    <div class="card-body text-center">
                                        <h5 class="">{artikel.title}</h5>
                                        <p className="lead">Rp {artikel.price}</p>
                                        <button type="submit" className="btn btn-success" onClick={this.handleTombolSimpan}>Beli</button>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>

            </div>
        )
    }
}
// const Product = () => {
//     const [products, setProducts] = useState([]);

// const dispatch = useDispatch();
// const addProduct = (products) => {
//     dispatch(addCart(products));
// }

//     useEffect(() => {
//         fetch('http://localhost:3001/posts')
//             .then((response) => response.json())
//             .then((result) => setProducts(result))
//             .catch((err) => console.log(err))
//     },[]);

//     return(
//         <>
//             <div className="container py-5">
//                 <div className="row">
//                     <div className="col-12 text-center">
//                         <h1>Product</h1>
//                         <hr />
//                     </div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row justify-content-around">
//                     {products && products.map(item => (
//                         <div class="card mb-4" key={item.id} style={{width: "18rem"}}>
//                         <img src={item.img} class="card-img-top" alt={item.title}/>
//                             <div class="card-body text-center">
//                                 <h5 class="">{item.title}</h5>
//                                 <p className="lead">Rp {item.price}</p>
//                                 <p className="lead">stok({item.stok})</p>
//                                 <NavLink to={`/cart${item.id}`} class="btn btn-primary ms-2" >Beli</NavLink>
//                             </div>
//                     </div>
//     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

export default Product;