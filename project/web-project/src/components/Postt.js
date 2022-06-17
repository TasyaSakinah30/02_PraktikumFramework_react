import React from "react";

const Postt = (props) => {
    function tambahProduct(e) {
        props.handleTombolBeli(
            props.idProduct,
            props.img,
            props.judul,
            props.isi,
            props.harga
        );
    }
    return (
        <div className="card">
            <input type="hidden" key={props.idProduct} value={props.idProduct} />
            <img className="card-img" alt="gambar product" src={props.img} width="100" />
            <div className="card-body">
                <h3 align="center">{props.judul}</h3>
                <p align="center">{props.isi}</p>
            </div>
            <td align="center">Rp {props.harga}</td>
            <button onClick={tambahProduct} className="btn btn-block btn-primary">Beli</button>
            <button className="btn btn-sm btn-warning"
                onClick={() => { if (window.confirm('Apakah anda yakin menghapus artikel ini?')) props.hapusProduct(props.idProduct) }}>Hapus</button>
        </div>
    )
}
export default Postt;