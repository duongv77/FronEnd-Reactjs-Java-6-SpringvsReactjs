import axiosClient from "./axiosClient";

const OrderAPI ={
    post: (url, data)=>{
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.post(url, data ,config) 
    },
    get: (url)=>{
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.get(url ,config) 
    },
}

export default OrderAPI;