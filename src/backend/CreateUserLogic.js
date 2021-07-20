import { useForm } from "react-hook-form";
import CreateUser from "../frontend/CreateUserF";
import Axios from "../api/RestFullAPI";

function CreateUseLogic({ showNotification }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const senMailChaoMung = async(value) => {
        try {
            const url = '/api/v1/user/sendmail'
            const response = await Axios.postNoToken(url, value)
            const { data } = response;
                if (data === true) {
                    console.log("Send mail thành công")
                } else {
                    console.log("Send mail thất bại")
                }
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    const create = (data1) => {
        const createUser = async () => {
            try {
                const url = '/api/v1/user/store'
                const response = await Axios.postNoToken(url, data1)
                console.log(response)
                if (response === 1) {
                    showNotification('error', 'Lỗi !', 'Email đã được sử dụng !!!')
                }else if(response===2){
                    showNotification('error', 'Lỗi !', 'Đăng kí tài khoản không thành công !!!')
                }else if(response===3){
                    showNotification('error', 'Lỗi !', 'Username đã được sử dụng !!!')
                }else{
                    showNotification('success', 'Success!', 'Đăng kí tài khoản thành công !!!')
                    senMailChaoMung(data1)
                }
                return response
            } catch (error) {
                console.log(error)
            }
        }
        createUser()
      

    }

    const onHandleSubmit = (data) => {
        create(data)
    }


    return (
        <div>
            <CreateUser
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onHandleSubmit={onHandleSubmit}
            />
        </div>

    )
}
export default CreateUseLogic;