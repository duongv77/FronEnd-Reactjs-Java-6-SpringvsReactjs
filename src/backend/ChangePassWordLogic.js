import ChangePassWord from "../frontend/ChangePassword";
// import axios from "../api/RestFullAPI";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import axios from "../api/RestFullAPI";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function ChangePassWordLogic({showNotification}){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [changePassWord , setChangPassWord]=useState({});
    const history = useHistory()
    const onHandleSubmit = (data) => {
        const {password, passwordconfirm, passwordnew} = data
        if(password===passwordnew){
            showNotification('error', 'Error!', 'Vui lòng không sử dụng lại password cũ !')
            return
        }
        if(passwordconfirm!==passwordnew){
            swal("Error" ,"Vui lòng nhập lại mật khẩu giống nhau!","error") 
            return
        }else{
            const {id} = JSON.parse(localStorage.getItem("userLogin"))
            setChangPassWord({
                pwold: password,
                pwnew: passwordnew,
                id: id
            })
            changePassWOrd(changePassWord)
        }
    }

    const changePassWOrd = async(value) => {
        try {
            console.log(value)
            const url = '/api/v2/user/changepw'
            const response =await axios.post(url, value)
            console.log(response)
            if(response===3){
                swal("Error" ,"Đổi mật khẩu không thành công server lỗi !","error")
            }else if(response===4){
                swal("Error" ,"Vui lòng chọn mật khẩu khác với mật khẩu cũ!","error")
            }else if(response===2){
                swal("Error" ,"Mật khẩu không chính xác !","error")
            }else if(response===1){
                swal("Error" ,"Không tìm thấy tài khoản của bạn !","error")
            }else{
                swal("Successfully" ,"Đổi mật khẩu thành công!","success")
                history.replace("/")
            }
            return response;
        } catch (error) {
            console.log(error)
            swal("Error" ,"Đổi mật khẩu không thành công !","error")
        }
    }

    return(
        <ChangePassWord 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onHandleSubmit={onHandleSubmit}
        />
    )
}

export default ChangePassWordLogic;