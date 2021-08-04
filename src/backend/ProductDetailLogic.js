import ProductDetail from '../frontend/ProductDetail'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productAPI from "../api/ProductAPI";

function ProductDetailLogic({showNotification}){
    const {id} = useParams()
    const [product, setProduct] = useState({});
    useEffect(()=>{
        const oneProduct = async()=>{
            try {
                const url = `/api/v1/product/${id}`
                const response = await productAPI.get(url)
                setProduct(response) 
            } catch (error) {
                console.log(error)
            }
        };
        oneProduct()
    },[])

    const showValueSale = (saleObj) => {
        try {
            const {sale} = saleObj.promotion
            return <h6 className="text-danger font-italic font-weight-bold">Sale {sale}%</h6>
        } catch (error) {
            
        }
    }

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }


    const showPrice = (price, saleObj) => {
        try {
            if(saleObj!==null){
                const {sale} = saleObj.promotion
                const priceOld = price*(100-sale)/100
                return (
                    <div>
                        <h2>{numberWithCommas(priceOld) } VNĐ </h2>
                        <span className="font-italic">Giá cũ: {numberWithCommas(price)} VNĐ</span>
                    </div>
                )
            }else{
                return (
                    <div>
                        <h6>{numberWithCommas(price)} VNĐ</h6>
                    </div>
                )
            }
        } catch (error) {
            
        }
    }

    return(
        <ProductDetail product={product} showValueSale={showValueSale} showPrice={showPrice} showNotification={showNotification}/>
    )
}

export default ProductDetailLogic;