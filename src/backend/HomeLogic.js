
import Home from "../frontend/Home";
import axios from "../api/RestFullAPI";
import { useEffect } from "react";
import axiosProduct from "../api/ProductAPI";


function HomeLogic({ listHangsx, setListHangsx , showNotification, setListProduct}) {
    useEffect(() => {
        const callApiHangsx = async () => {
            try {
                const url = "/api/v1/hangsx";
                const response = await axios.get(url)
                setListHangsx(response)
                return response;
            } catch (error) {
                console.log(error);
                showNotification("error", "Error!", "Không hiển thị hãng giày !");
            }
        };
        callApiHangsx();
    }, []);

    useEffect(() => {
        const getAllProduct = async () => {
            try {
                const url = '/api/v1/product';
                const response = await axiosProduct.getAll(url)
                setListProduct(response)
                return response
            } catch (error) {
  
            }
        };
        getAllProduct();
    }, [])
    return <Home listHangsx={listHangsx}/>;
}
export default HomeLogic;
