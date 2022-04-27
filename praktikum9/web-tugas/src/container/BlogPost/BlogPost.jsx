import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../services";

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
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data);
        this.ambilDataDariServerAPI();
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
        API.postNewsBlog(this.state.insertArtikel)
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