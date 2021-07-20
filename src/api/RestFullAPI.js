import axiosClient from "./axiosClient";

    const userApi= {

        post: (url,data) =>{
            const config = { headers:{Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),}}
            return axiosClient.post(url , data, config);
        },

        postNoToken: (url,data) =>{
            return axiosClient.post(url , data);
        },

        postAnh:(url, data) =>{
            const config ={
                headers: {
                    "Content-Type": "multipart/form-data",
                  },
            }
            return axiosClient.post(url, data, config);
        },
        get: (url)=>{
            // const config ={
            //     headers: {
            //         Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
                    
            //       },
            // }
            return axiosClient.get(url )
        },
        put: (url, data )=>{
            const config ={
                headers: {
                    Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
                    
                  },
            }
            return axiosClient.put(url, data,config)
        }
        
    }
   



export default userApi;