import {
    useParams, NavLink
} from "react-router-dom";
import { useEffect, useState } from "react";
import PromotionApi from "../../api/PromotionAPI";
import swal from 'sweetalert';

function AdminSaleDetail({showNotification}) {
    const [sale, setSale] = useState({})
    const [listProductSale, setListProductSale] = useState([])
    const [listProductNotSale, setListProductNotSale] = useState([])
    const { id } = useParams();
    const callApiProductOfSale = async () => {
        try {
            const url = `/api/v2/admin/product/promotion_${id}`
            const response = await PromotionApi.get(url)
            setListProductSale(response)
        } catch (error) {
            console.log(error)
        }
    }
    const callApiProductNotSale = async () => {
        try {
            const url = "/api/v2/admin/product/notpromotion"
            const response = await PromotionApi.get(url)
            console.log(response)
            setListProductNotSale(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const callApiShow = async () => {
            try {
                const url = `/api/v2/admin/promotion/${id}`
                const response = await PromotionApi.get(url)
                setSale(response)
            } catch (error) {

            }
        }
        callApiShow();
        callApiProductOfSale()
        callApiProductNotSale()
        console.log(listProductSale)
    }, [])

    const callApiCreatePromd = async(idPromotion, idProduct) => {
        try {
            const url = `/api/v2/admin/promotion_${idPromotion}/product_${idProduct}`
            const response = await PromotionApi.get(url)
            console.log(response)
            if(response.status===200){
                showNotification('success', 'Success!', 'Thêm thành công !!!')
            }else{
                showNotification('error', 'Error!', 'Thêm không thành công !!!')
            }
        } catch (error) {
            
        }
    }

    const onClickAdd = (e ,value) => {
        e.preventDefault()
        setListProductSale([...listProductSale, value])
        callApiCreatePromd(id, value.id)
    }

    const callApiDeletePromotiondetai = async(id) => {
        try {
            const url = `/api/v2/admin/proomotiondetail_${id}`
            const response = await PromotionApi.delete(url)
            console.log(response)
            setListProductSale((oldValue)=>{
                let listProductNew = oldValue.filter((val) => {
                    return val.id !== id
                })
                return listProductNew
            })
            showNotification('success', 'Success!', 'Xóa thành công !!!')
        } catch (error) {
            console.log(error)
            showNotification('error', 'Error!', 'Xóa không thành công !!!')
        }
    }

    const onClickdelete = (e, id) => {
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: "Bạn muốn xóa sản phẩm này ra khỏi chương trình sale!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                callApiDeletePromotiondetai(id)
            }else{
                showNotification('error', 'Error!', 'Xóa không thành công !!!')
            }
          });
    }

    try {
        return (
            <div className="row">
                <div className="col-3" >
                    <div className="card mt-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-success">{sale.name}</h5>
                            <p className="card-text">{sale.description}</p>
                            <p className="card-text text-danger font-italic">Giảm giá sản phẩm: {sale.sale} %</p>
                            <p className="card-text">Ngày tạo: {sale.createdate}</p>
                            <NavLink className="btn btn-outline-success" to="/admin/sale">Quay lại</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <h4 className="text-success ">Danh sách sản phẩm nằm trong chương trình <span className="text-danger">Sale</span></h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">ID</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Giá gốc</th>
                                <th scope="col">Giá sale</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listProductSale.map(function (value, index) {

                                    return (
                                        <tr key={index}>
                                            <th scope="row">{++index}</th>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td><img src={value.image} height={70} alt=""/></td>
                                            <td>{value.price}</td>
                                            <td>{value.price / 100 * (100 - sale.sale)}</td>
                                            <td >
                                                <div>
                                                    <a href="#" className="cdn" onClick={(e)=>{onClickdelete(e,value.promotiondetail.id)}}><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Danh sách sản phẩm
                    </button>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Danh sách sản phẩm</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Tên sản phẩm</th>
                                            <th scope="col">Hình ảnh</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Hãng sản xuất</th>
                                            <th scope="col">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listProductNotSale.map(function (value, index) {

                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{++index}</th>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td><img src={value.image} height={70} alt=""/></td>
                                                        <td>{value.price}</td>
                                                        <td>{value.productype.name}</td>
                                                        <td ><a href="#" className="cdn" onClick={(e)=>{onClickAdd(e, value)}}><i class="fa fa-plus" aria-hidden="true"></i></a></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        return (
            <div>
                Không tìm thấy trương trình !
            </div>
        )
    }
}

export default AdminSaleDetail;