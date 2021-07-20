import ForgetPassWord from "../frontend/ForgetPassWord";
import { useForm } from "react-hook-form";
import {
    useHistory
} from "react-router-dom";
import swal from 'sweetalert';
import Axios from "../api/RestFullAPI";

function ForgetPassWordLogic({ showNotification }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory()
    const onHandleSubmit = (data) => {
        forGetPw(data)

    }

    const sendEailNewPw = async (data) => {
        try {
            const url = '/api/v1/user/forgetpwsenmail'
            const response = await Axios.postNoToken(url, data)
            response ? showNotification('success', 'Thành công!', 'Mật khẩu của bạn đã được gửi về mail !!!') : showNotification('error', 'Lỗi!', 'Xảy ra lỗi. Bạn vui lòng thử lại !!!')
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    const forGetPw = async (data1) => {
        try {
            const url = '/api/v1/user/forgetpw'
            const response = await Axios.postNoToken(url, data1)
            if (response) {
                swal("Đổi mật khẩu thành công!", "Mật khẩu sẽ được đổi lại trong giây lát. Bạn vui lòng đăng nhập vào email đăng kí acount để nhận lại mật khẩu !!", "success");
                sendEailNewPw(data1)
                history.replace('/login')
            } else {
                swal("Đổi mật khẩu không thành công!", "Bạn vui lòng kiểm tra lại email !!", "error");
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ForgetPassWord
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onHandleSubmit={onHandleSubmit}
        />
    )
}

export default ForgetPassWordLogic;