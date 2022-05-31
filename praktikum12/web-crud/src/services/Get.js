import { domainPath } from "./Config";

const GetAPI = (path) => {            // path digunakan untuk menunjukkan alamat API mana yang akan di-request
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)      // alamat url domain + path untuk mengakses full alamat API yg di-request
        .then(response => response.json())  // response dari server harus dijadikan json
        .then((result) => {
            resolve(result);                
        }, (err) => {
            reject(err);
        })                                  // maka kirim pesan error ke user melalui reject
    })
    return promise;
}
export default GetAPI;