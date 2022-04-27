import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewsBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');

// Daftar API - POST
const postNewsBlog = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);

// Daftar API - DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {       // inisialisasi function yang akan disediakan global API
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;