import AdminProduct from "../fe/AdminProduct";
import productAPI from "../../api/ProductAPI";
import { useEffect , useState} from "react";
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import productypeApi from "../../api/ProductypeAPI";
import firebase from "firebase"

function AdminProductLogic({showNotification}){
    const [listProduct , setListProduct] = useState([])
    const [photoOfProductUpdate, setPhotoOfProductUpdate] = useState()
    const [listHangSx, setListHangSx] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [productUpdateLogic, setproductUpdateLogic] = useState()

    const callApiListHangsx = async() => {
        try {
            const url = "/api/v2/admin/hangsx"
            const response = await productypeApi.get(url)
            setListHangSx(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const callApiListProduct = async() => {
            try {
                const url = "/api/v2/admin/product"
                const response = await productAPI.getAdmin(url)
                setListProduct(response)
            } catch (error) {
                
            }
        }
        callApiListProduct()
        callApiListHangsx()
    }, [])

    const onChageSwith = async(e,  value)=>{
        const {checked} = e.target
        const {id} = value
        const available = checked === true ? 1 : 0
        try {
            const url = `/api/v2/admin/product:${id}/available:${available}`
            const response = await productAPI.getAdmin(url)
            if(response!==''){
                showNotification('success', 'Success!', 'Update thành công !!!')
                setListProduct((oldValue)=>{
                    let newValue = oldValue.map((val)=>{
                        return val.id ===response.id ? response : val
                    })
                    return newValue
                })
            }
        } catch (error) {
            
        }
    }

    const onClickDelete = (e, value) =>{
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Bạn muốn xóa sản phẩm " + value.name + " ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              callApiDelete(value)
            } else {
              swal("Xóa không thành công!");
            }
          });
        
    }

    const callApiDelete = async(value) => {
       try {
            const url= "/api/v2/admin/product"
            const response = await productAPI.postAdmin(url, value)
            const {status} = response;
            if(status===200){
                swal("Xóa hoàn tất", {
                    icon: "success",
                });
                setListProduct((oldValue)=>{
                    let listProductNew = oldValue.filter((val) => {
                        return val.id !== value.id
                    })
                    return listProductNew
                })
            }else{
                swal("Xóa không thành công", {
                    icon: "error",
                });
            }
       } catch (error) {
           console.log(error.response)
       }
    }

    const idProduct = (id) => {
        setproductUpdateLogic(id)
    }

    const onSubmitUpdateProduct = () => {
        const name = document.getElementById('name').value
        const price = Number(document.getElementById('price').value)
        const available = Number(document.getElementById('available').value)
        const prdt = Number(document.getElementById('productype').value)
        const productypes = listHangSx.filter((value) => {
            return value.id === prdt 
        })
        const id = productUpdateLogic
        const productype = productypes[0]
        const description = document.getElementById('description').value
        const createdate = document.getElementById('createdate').value
        const image = photoOfProductUpdate
        const value = {id, name, price ,available ,productype ,description, image, createdate}
        console.log(value)
        callApiUpdateProduct(value)
    }

    const callApiUpdateProduct = async(data) => {
        try {
            const url = "/api/v2/admin/product"
            const response = await productAPI.putAdmin(url , data)
            showNotification('success', 'Success!', 'Update thành công !!!')
            setListProduct((oldValue)=>{
                let newValue = oldValue.map(function(val) {
                    return val.id ===response.id ? response : val
                })
                return newValue
            })
            setPhotoOfProductUpdate(null)
        } catch (error) {
            showNotification('error', 'Lỗi !', 'Update không thành công !!!')
            console.log(error)
        }
    }

    const upImg = () => {
        try {
            const file = document.getElementById('img').files[0]
            let storagerRef = firebase.storage().ref(`images/${file.name}`);
            storagerRef.put(file).then(function () {
                storagerRef.getDownloadURL().then((url) => {
                    setPhotoOfProductUpdate(url)
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitAddProduct = (data) =>{
        const {name, oldprice,oldavailable,description, oldproductype} = data
        console.log(data)
        const oldId  = Number(oldproductype)
        const productypes = listHangSx.filter((value) => {
            return value.id === oldId 
        })
        const productype = productypes[0]
        const price = Number(oldprice)
        const available = Number(oldavailable)
        const image = photoOfProductUpdate
        const value = { name, price ,available ,productype ,description, image}
        console.log(value)
        callApiCreateProduct(value)
    }
    const callApiCreateProduct = async(data) => {
        console.log(data)
        try {
            const url = "/api/v2/admin/create/product"
            const response = await productAPI.postAdmin(url,data )
            showNotification('success', 'Success!', 'Thêm sản phẩm' +data.name+ ' thành công !!!')
            setListProduct([
                ...listProduct,
                response
            ])
        } catch (error) {
            showNotification('error', 'Lỗi !', 'Thêm không thành công !!!')
            console.log(error.response)
        }
    }
    return(
        <AdminProduct 
        listProduct={listProduct} 
        onChageSwith={onChageSwith} 
        onClickDelete={onClickDelete} 
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmitUpdateProduct={onSubmitUpdateProduct}
        setPhotoOfProductUpdate={setPhotoOfProductUpdate}
        photoOfProductUpdate={photoOfProductUpdate}
        upImg={upImg}
        listHangSx={listHangSx}
        idProduct={idProduct}
        onSubmitAddProduct={onSubmitAddProduct}
        />
    )
}
export default AdminProductLogic;