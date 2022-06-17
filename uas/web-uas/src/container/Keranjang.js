import React, { Component } from "react";
import firebase from "firebase";
import firebaseConfig from "../../src/firebase/config";

var total, subtotal, no;

class Keranjang extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);

        this.state = {
            listCard: []
        }
    }

    componentDidMount() {
        this.ambilDataKeranjang();
    }

    ambilDataKeranjang = () => {
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    listKeranjang() {
        total = 0;
        subtotal = 0;
        no = 0;
        return this.state.listCard.map((cart) => {
            subtotal = cart.price * cart.qty;
            total = total + cart.price * cart.qty;
            no += 1;
            return (
                <tr key={cart.uid}>
                    <th scope="row">{no}</th>
                    <td>{cart.title}</td>
                    <td>Rp{cart.price},00</td>
                    <td>{cart.qty}</td>
                    <td>Rp{subtotal},00</td>
                </tr>
            );
        });
    }
        
    

    render() {
        
        return (
            <div className="col-lg-12">
                <div className="container">
                    <h1>🛒 Keranjang</h1>
                    <div className="row">
                        <table className="table mt-3 table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.listKeranjang()}
                            </tbody>
                            <tfoot className="font-weight-bold text-white bg-primary">
                                <td className="text-center" colSpan="4">
                                    Total
                                </td>
                                <td>Rp{total},00</td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Keranjang;