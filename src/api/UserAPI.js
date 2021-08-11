import axiosClient from "./axiosClient";

const UserAPI ={
    get: (url)=>{
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.get(url, config) 
    },
    post: (url, data)=>{
        const config ={
            headers: {
                Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
              },
        }
        return axiosClient.post(url,data ,config) 
    },

}

export default UserAPI;