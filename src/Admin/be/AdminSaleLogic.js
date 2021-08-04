import AdminSale from "../fe/AdminSale";
import PromotionApi from "../../api/PromotionAPI";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

function AdminSaleLogic ( {showNotification}) {
    const [listSale , setListSale] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(()=>{
        const callApiListSale = async() => {
            try {
                const url = '/api/v2/admin/promotion'
                const response = await PromotionApi.get(url)
                setListSale(response)
            } catch (error) {
                console.log(error)
            }
        }
        callApiListSale()
    },[])

    const onSubmit = (data) => {
        
        const {name, oldsale , description} = data
        const sale = Number(oldsale)
        const value = { name , sale , description}
        callApiCreatePromotion(value)
        
    }

    const callApiCreatePromotion = async(data) => {
        try {
            const url = "/api/v2/admin/promotion"
            const response = await PromotionApi.post(url , data)
            setListSale([...listSale, response])
            showNotification('success', 'Success!', 'Thêm ' +data.name+ ' thành công !!!')
        } catch (error) {
            console.log(error)
            showNotification('error', 'Lỗi!', 'Thêm ' +data.name+ ' không thành công !!!')
        }
    }

    const onClickDelete = (id) =>{
        console.log(id)
        swal({
            title: "Are you sure?",
            text: "Bạn muốn xóa !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                callApiDelete(id)
            } else {
              swal("Xóa không thành công!");
            }
          });
    }

    const callApiDelete = async(id) => {
        try {
            const url = `/api/v2/admin/promotion/${id}`
            const response = await PromotionApi.delete(url)
            setListSale((oldValue)=>{
                let listSaleNew = oldValue.filter((val)=>{
                    return val.id !== id
                })
                return listSaleNew
            })
            swal("Xóa " +response.name+ " thành công", {
                icon: "success",
              });
        } catch (error) {
            swal("Error!", "Xóa không thành công!", "error");
        }
    }

    return(
        <AdminSale listSale={listSale} register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} onClickDelete={onClickDelete}/>
    )
}

export default AdminSaleLogic;