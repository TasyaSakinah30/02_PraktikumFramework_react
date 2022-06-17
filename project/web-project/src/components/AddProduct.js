import React, { Component } from "react";
import Post from "./Post";
// import API from "../../services";
import firebase from "firebase";
import firebaseConfig from "../firebase/config";

firebase.initializeApp(firebaseConfig);
class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: []
        }
        this.insert = {
            listCart: []
        }
    }

    ambilDataDariServerAPI = () => {
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
            .ref("/")
            .set(this.state);
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevProp !== this.state) {
            this.simpanDataKeServerAPI();
        }
    }

    handleTombolBeli = (uid, img, title, body, price) => {
        const {listProduct} = this.state;
        const {listCart} = this.insert;
        const onCart = listCart.find((cart) => cart.uid === uid);
        const indeksProduct = listProduct.findIndex((data) => {
            return data.uid === uid;
        });
        if (onCart) {
            firebase
                .database()
                .ref("cart/" + indeksProduct)
        } else {
            firebase
                .database()
                .ref("cart/" + indeksProduct)
                .set({
                    uid: uid,
                    img: img,
                    title: title,
                    body: body,
                    price: price
                });
        }
    }

    handleHapusProduct = (idProduct) => {
        const { listProduct } = this.state;
        const newState = listProduct.filter(data => {
            return data.uid !== idProduct;
        });
        this.setState({ listProduct: newState });
    }

    handleTombolSimpan = (event) => {
        let img = this.refs.imgProduct.value;
        let title = this.refs.judulProduct.value;
        let body = this.refs.isiProduct.value;
        let price = this.refs.hargaProduct.value;
        let uid = this.refs.uid.value;

        if (uid && title && img && price && body) {
            const { listProduct } = this.state;
            const indeksProduct = listProduct.findIndex(data => {
                return data.uid === uid;
            });
            listProduct[indeksProduct].img = img;
            listProduct[indeksProduct].title = title;
            listProduct[indeksProduct].body = body;
            listProduct[indeksProduct].price = price;
            this.setState({ listProduct });
        } else if (title && img && price && body) {
            const uid = new Date().getTime().toString();
            const { listProduct } = this.state;
            listProduct.push({ uid, img, title, body, price });
            this.setState({ listProduct });
        }
        this.refs.imgProduct.value = "";
        this.refs.judulProduct.value = "";
        this.refs.isiProduct.value = "";
        this.refs.hargaProduct.value = "";
        this.refs.uid.value = "";
    };

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="image" className="col-sm-2 col-form-label">Image Product</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="image" name="image" ref="imgProduct" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama Product</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulProduct" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiProduct"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Harga Product</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="price" name="price" ref="hargaProduct" />
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid" />
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                <div className="container">
                    <div className="row ml-3">
                        {
                            this.state.listProduct.map(product => {
                                return <Post key={product.uid} img={product.img} judul={product.title} isi={product.body} harga={product.price} idProduct={product.uid} 
                                beliProduct={this.handleTombolBeli} hapusProduct={this.handleHapusProduct} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default AddProduct;