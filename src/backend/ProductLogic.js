import Product from '../frontend/Product'
import {  useRef, useState } from "react"; 
import productAPI from "../api/ProductAPI";
import CartAPI from '../api/CartAPI';
import {  useHistory } from "react-router-dom";
import swal from 'sweetalert';

function ProductLogic({listHangsx,listProduct, showNotification}){
    const typingTimeOut = useRef(null)
    const[listProductToHangsx, setListProductToHangsx] = useState(listProduct)
    const history = useHistory()

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
                        <h6>{numberWithCommas(priceOld)} VNĐ</h6>
                        <h6 className="l-through font-italic">{numberWithCommas(price)} VNĐ</h6>
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

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
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

    
    const onChanSeach = (e) => {
        const {value} = e.target
        if(typingTimeOut.current){
            clearTimeout(typingTimeOut.current);
        }
        typingTimeOut.current = setTimeout(()=>{
            callApiSeachProduct(value)
        }, 400)
    }

    const callApiSeachProduct = async(key) =>{
        try {
            const url = `/api/v1/product/seach:${key}`
            const response = await productAPI.get(url)
            console.log(response)
            setListProductToHangsx(response)
        } catch (error) {
            console.log(error)
        }
    }

    const callApiAddProductToCart = async(id) => {
        try {
            const url = `/api/v2/user/card/product:${id}`
            const response = await CartAPI.get(url)
            const {status} = response
            console.log(response)
            if(status===200){
                showNotification('success', 'Success!', 'Đã thêm vào giỏ hàng !!!')
            }else{
                showNotification('error', 'Lỗi !', 'Thêm vào giỏ hàng thất bại !!!')
            }
            console.log(response)
        } catch (error) {
            
        }
    }

    const onClickAddCart =(id)=>{
        const userLogin = localStorage.getItem("userLogin")
        if(userLogin === null) {
            swal("Error", "Bạn chưa đăng nhập. Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng", "error");
            history.replace("/login")
        } else {
            callApiAddProductToCart(id)
        }
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
            onChanSeach={onChanSeach}
            onClickAddCart={onClickAddCart}
        />
    )
}

export default ProductLogic;