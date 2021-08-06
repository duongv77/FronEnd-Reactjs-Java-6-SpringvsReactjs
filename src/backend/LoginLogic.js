import Login from "../frontend/Login";
import {
    useHistory
} from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import Axios from "../api/RestFullAPI";


function LoginLogic({SetUserLogin}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = (data) => {
        console.log(data)
        logIn(data);
    }
    let history = useHistory()

    const logIn = async (value) => {
        console.log(value)
        try {
            const url = '/api/v1/user/login'
            const response = await Axios.postNoToken(url, value);
            
            console.log("đây là data login gửi về ", response)
            if (response !== '') {
                const {id, fullname, email, photo,activated , accesstoken , admin} = response
                const userResponse = {
                    id, fullname, email, photo,activated, admin
                }
                history.replace("/")
                swal("Success", "Bạn đã đăng nhập thành công. Xin chào!", "success");
                SetUserLogin(userResponse)
                localStorage.setItem("accessTokenLogin", accesstoken)

                
                // //lưu vào localStorage đổi obj thành json
                localStorage.setItem('userLogin', JSON.stringify(userResponse))
                // const user = localStorage.getItem('accessTokenLogin')

                // //Lấy từ trong localStorage được mã hóa lại
                // console.log("user đăng nhập lưu trong localStorage ", JSON.parse(user))

                 // setUser(data)    
            } else {
                //history.replace("/login")
                swal("Error", "Đăng nhập không thành công. Thông tin tài khoản mật khẩu không chính xác!!!", "error");
                localStorage.removeItem("accessTokenLogin")
            }
            return response;
        } catch (error) {
            swal("Error", "Đăng nhập không thành công. Thông tin tài khoản mật khẩu không chính xác!!!", "error");
            history.push("/login")
            localStorage.removeItem("accessTokenLogin")
            console.log(error)
        }
    }

    return (
        <Login
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onHandleSubmit={onHandleSubmit}
        />
    )
}
export default LoginLogic;