import axiosClient from "./axiosClient";

const productAPI= {
    getAll: (url) =>{
        return axiosClient.get(url)
    },
    get: (url) => {
        return axiosClient.get(url)
    },
    getPage: (url ) => {
        return axiosClient.get(url)
    },
}




export default productAPI;