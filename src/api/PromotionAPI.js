import axiosClient from "./axiosClient";

    const PromotionApi= {

        get: (url) =>{
            const config = { headers:{Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),}}
            return axiosClient.get(url , config);
        },
        post: (url, data) =>{
            const config = { headers:{Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),}}
            return axiosClient.post(url , data , config);
        },
        delete: (url) =>{
            const config = { headers:{Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),}}
            return axiosClient.delete(url , config);
        },
    }
   
export default PromotionApi;