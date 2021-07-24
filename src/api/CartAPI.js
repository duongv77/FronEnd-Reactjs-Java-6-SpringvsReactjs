import axiosClient from "./axiosClient";

const CartAPI ={
    get: (url)=>{
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.get(url, config) 
    },

    put: (url, data)=>{
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.put(url, data , config)
    },

    delete: (url) => {
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.delete(url , config)
    }


}

export default CartAPI;