import React from "react";

const PostCart = (props) => {
    return (
        <tr>
            <td align="center" alt="gambar product" src={props.img} ></td>
            <td align="center">{props.judul}</td>
            <td align="center">{props.harga}</td>
                <button className="btn btn-sm btn-warning"
                    onClick={() => { if (window.confirm('Apakah anda yakin menghapus artikel ini?')) props.hapusProduct(props.idCart) }}>Hapus</button>           
        </tr>
    )
}
export default PostCart;