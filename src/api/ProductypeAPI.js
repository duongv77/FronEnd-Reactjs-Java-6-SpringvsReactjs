import axiosClient from "./axiosClient";

    const productypeApi= {

        get: (url) =>{
            const config = { headers:{Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),}}
            return axiosClient.get(url , config);
        },
    }
   



export default productypeApi;