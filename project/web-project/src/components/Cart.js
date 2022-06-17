import React, { Component } from "react";
// import API from "../../services";
import firebase from "firebase/compat/app";
import PostCart from "./PostCart";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: []
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

    handleHapusProduct = (idCart) => {
        const { cart } = this.state;
        const newState = cart.filter(data => {
            return data.uid !== idCart;
        });
        this.setState({ cart: newState });
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Kerangjang Belanja</h2>
                    <hr/>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td>Image</td>
                                <td>Nama</td>
                                <td>Harga</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        {
                            this.state.cart.map(cart => {
                                return <PostCart key={cart.uid} img={cart.img} judul={cart.title} isi={cart.body} harga={cart.price} idCart={cart.uid} 
                                hapusProduct={this.handleHapusProduct} />
                            })
                        }
                    </table>
            </div>
        )
    }
}
export default Cart;