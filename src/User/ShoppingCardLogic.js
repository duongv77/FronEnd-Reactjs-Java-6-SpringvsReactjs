import ShoppingCard from './ShoppingCard'
import CartAPI from '../api/CartAPI';
import { useEffect, useRef, useState} from "react";
import swal from 'sweetalert';
import {
    useHistory
} from "react-router-dom";
import OrderAPI from '../api/OrderAPI';
import CartdetaiAPI from '../api/CartdetailAPI';

function ShoppingCardLogic({showNotification}) {
    const [productCart, setProductCart] = useState([])
    const [listProductCheckbox, setListProductCheckBox] = useState([])
    const typingTimeOut = useRef(null)
    const [total, setTotal] = useState(0)
    const history = useHistory()
    useEffect(() => {
        const callApiCart = async () => {
            try {
                const url = "/api/v2/user/card"
                const response = await CartAPI.get(url);
                setProductCart(response);
                setListProductCheckBox(response)
                console.log(response)                   
            } catch (error) {
                console.log(error)
            }
        }
        callApiCart()
    }, [])

    const onClickInput = (e, data) => {
        const { value } = e.target
        if (typingTimeOut.current) {
            clearTimeout(typingTimeOut.current);
        }
        typingTimeOut.current = setTimeout(() => {
            const valueInt = Number(value)
            const quantity = valueInt < 0 ? 0 : valueInt
            const { id, createdate, product } = data;
            const productNew = { id, createdate, product, quantity }
            callApiUpdateQuantity(productNew)
            if(quantity===0){
                comfirmDeleteCartDetail(id)
            }
        }, 400)
    }


    const callApiUpdateQuantity = async (data) => {
        try {
            const url = "/api/v2/user/card"
            const response = await CartAPI.put(url, data)
            const newListProduct = productCart.map((productCart) => productCart.id === response.id ? response : productCart)
            setProductCart(newListProduct)
            setListProductCheckBox(newListProduct)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const comfirmDeleteCartDetail = (id) => {
        try {
            swal({
                title: "Chú ý?",
                text: "Số lượng sản phẩm đã về 0. Bạn có muốn xóa bỏ sản phầm này ra khỏi giỏ hàng?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        callApiDeleteCartDetail(id)
                    } else {
                        showNotification('error', 'Chú ý !', 'Số lượng đã về 0. Bạn vui lòng chọn đồng ý xóa khỏi giỏ hàng !!!')
                    }
                });
        } catch (error) {

        }
    }

    const callApiDeleteCartDetail = async (id) => {
        try {
            const url = `/api/v2/user/card/product:${id}`
            const response = await CartAPI.delete(url)
            const {status} = response
            if(status === 200) {
                swal("Poof! Your imaginary file has been deleted!", { icon: "success", });
                const newListProduct = productCart.filter((item)=> item.id!==id);
                setProductCart(newListProduct)
            }
        } catch (error) {

        }
    }

    const createOrder = async() => {
        const address = document.getElementById('address').value
        if(address===''){
            showNotification('error', 'Chú ý !', 'Vui lòng nhập địa chỉ !!!')
            return
        }
        try {
            const url = '/api/v2/user/order'
            const response = await OrderAPI.post(url, address)
            if(response!==null){
                createOrderDetail(response)
            }else{
                showNotification('error', 'Chú ý !', 'Không thể tạo đơn hàng. Vui lòng kiểm tra lại !!!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const createOrderDetail = async(id) => {
        try {
            const url = `/api/v2/user/orderdetail/${id}`
            const response = await OrderAPI.post(url, productCart)
            const {status} = response
            if(status===200){
                showNotification('success', 'Thành công !', 'Bạn đã tạo thành công !!!')
                setProductCart([])
            }else{
                showNotification('error', 'Chú ý !', 'Không thể tạo đơn hàng. Vui lòng kiểm tra lại !!!')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const onClickCheckbox = (e, value) => {
        const {checked} = e.target
        console.log(checked) 
        console.log(value)

        if(checked===true){
            setListProductCheckBox([
                ...listProductCheckbox,
                value
            ])
        }else{
            setListProductCheckBox((oldValue)=>{
                let newValue = oldValue.filter((val)=>{
                    return val.id !== value.id
                }) 
                return newValue
            })
        }
       
    }

    useEffect(()=>{
        tinhTong()
    }, [listProductCheckbox])

    const tinhTong = () => {
        try {
            let tong = 0;
            listProductCheckbox.map(function(value){
                const {product, quantity} = value
                const {price,promotiondetail} = product
                let sale = promotiondetail === null ? 100 : 100 - promotiondetail.promotion.sale
                let prices = price*quantity/100*sale
                tong+=prices
            })
            setTotal(tong)
        } catch (error) {
            
        }
    }

    const deleteChecked = async() => {
        try {
            const url = "/api/v2/user/cartdetail"
            const response = await CartdetaiAPI.post(url, listProductCheckbox)
            console.log(response)
            setListProductCheckBox(response)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <ShoppingCard productCart={productCart} onClickInput={onClickInput} createOrder={createOrder} onClickCheckbox={onClickCheckbox} total={total}  deleteChecked={deleteChecked}/>
    )
}

export default ShoppingCardLogic;