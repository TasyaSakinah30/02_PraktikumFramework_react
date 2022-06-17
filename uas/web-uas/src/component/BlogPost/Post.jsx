import React from "react";

const Post = (props) => {
    function tambahProduct(e) {
        props.handleTombolBeli(
            props.idProduct,
            props.judul,
            props.isi,
            props.harga
        );
    }
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <p className="harga-artikel">Rp. {props.harga}</p>
                <button onClick={tambahProduct} className="btn btn-block btn-primary">Beli</button>
                <button className="btn btn-sm btn-warning" 
                    onClick={() => { if (window.confirm('Apakah anda yakin menghapus artikel ini?')) props.hapusArtikel(props.idArtikel)}}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;