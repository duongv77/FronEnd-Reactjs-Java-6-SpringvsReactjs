import Product from '../frontend/Product'
import {  useState } from "react"; 
import productAPI from "../api/ProductAPI";

function ProductLogic({listHangsx,listProduct}){

    const[listProductToHangsx, setListProductToHangsx] = useState(listProduct)

    const showAllProduct = (e) => {
        e.preventDefault()
        setListProductToHangsx(listProduct)
    }

    const showValueSale = (saleObj) => {
        try {
            const {sale} = saleObj.promotion
            return <h6 className="text-danger font-italic font-weight-bold">Sale {sale}%</h6>
        } catch (error) {
            
        }
    }

    const showListProduct = async(e , id) => {
        e.preventDefault();
        try {
            const url =`/api/v1/product/hangsx/${id}`
            const response = await  productAPI.get(url)
            setListProductToHangsx(response)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const showPrice = (price, saleObj) => {
        try {
            if(saleObj!==null){
                const {sale} = saleObj.promotion
                const priceOld = price*(100-sale)/100
                return (
                    <div>
                        <h6>{priceOld} VNĐ</h6>
                        <h6 className="l-through font-italic">{price} VNĐ</h6>
                    </div>
                )
            }else{
                return (
                    <div>
                        <h6>{price} VNĐ</h6>
                    </div>
                )
            }
        } catch (error) {
            
        }
    }

    const callApiLimit = async(limit,page,sort) => {
        try {
            const url = `/api/v1/product/limit_${limit}/page_${page}/sort_${sort}`
            const response = await productAPI.getPage(url)
            setListProductToHangsx(response)
            console.log(response)
            return response;
        } catch (error) {
            
        }
    }

    const onChangePage = (e) =>{
        const sort =document.getElementById('sort').value
        const limit = document.getElementById('amount').value
        callApiLimit(limit, 0, sort)
    }

    const onClickPage = (e) => {
        const sort =document.getElementById('sort').value
        const limit = document.getElementById('amount').value
        const {value} = e.target
        callApiLimit(limit, value, sort)
    }

    return(
        <Product 
            listHangsx={listHangsx}
            listProductToHangsx={listProductToHangsx}
            showAllProduct={showAllProduct}
            showValueSale={showValueSale}
            showListProduct={showListProduct}
            showPrice={showPrice}
            onChangePage={onChangePage}
            onClickPage={onClickPage}
        />
    )
}

export default ProductLogic;