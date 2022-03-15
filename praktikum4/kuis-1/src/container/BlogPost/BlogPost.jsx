import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

// class BlogPost extends Component{
//     render() {
//         return(
//             <div class="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/>
//                 {/* <div class="artikel">
//                     <div class="gambar-artikel">
//                         <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
//                     </div>
//                     <div class="konten-artikel">
//                         <div class="judul-artikel">Judul Artikel</div>
//                         <p class="isi-artikel">Isi Artikel</p>
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }
// }

class BlogPost extends Component{
    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
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

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then( (response) => {
                this.ambilDataDariServerAPI();
            });
    }
    
    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nama" name="nama" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">Hp</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="hp" name="hp" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <br></br>
                <div className="judul">
                <h2>Daftar Mahasiswa</h2>
                </div>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} ni={artikel.nim} nm={artikel.nama} almt={artikel.alamat} h={artikel.hp} ang={artikel.angkatan} st={artikel.status} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}
export default BlogPost;