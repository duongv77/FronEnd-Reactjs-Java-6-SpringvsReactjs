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
    getAdmin: (url) => {
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.get(url, config)
    },
    postAdmin: (url, data) => {
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.post(url,data , config)
    }
}




export default productAPI;