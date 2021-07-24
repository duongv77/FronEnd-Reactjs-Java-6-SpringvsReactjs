import axiosClient from "./axiosClient";

    const CartdetaiAPI= {
        post: (url, data)=>{
            const config ={
                headers: {
                    Authorization: 'Bearer ' +  localStorage.getItem("accessTokenLogin"),
                  },
            }
            return axiosClient.post(url, data ,config)
        }
        
    }
   



export default CartdetaiAPI;