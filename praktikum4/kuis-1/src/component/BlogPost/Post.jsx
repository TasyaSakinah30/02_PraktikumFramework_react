import React from "react";

const Post = (props) => {
        return(
            <div class="container">
            <div className="artikel">
                <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/people" alt="Gambar Tumbnail Artikel" />
                </div>
                <div className="konten-artikel">
                    <p className="isi-artikel">{props.ni}</p>
                    <p className="isi-artikel">{props.nm}</p>
                    <p className="isi-artikel">{props.almt}</p>
                    <p className="isi-artikel">{props.h}</p>
                    <p className="isi-artikel">{props.ang}</p>
                    <p className="isi-artikel">{props.st}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
                </div>
            </div>
            </div>
        )
    }
export default Post;