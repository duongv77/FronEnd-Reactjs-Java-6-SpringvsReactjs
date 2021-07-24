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

    const onSubmitUpdateProduct = () => {
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const available = document.getElementById('available').value
        const productype = document.getElementById('productype').value
        const description = document.getElementById('description').value
        const value = {name, price ,available ,productype ,description}
        console.log(value)
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
        />
    )
}
export default AdminProductLogic;