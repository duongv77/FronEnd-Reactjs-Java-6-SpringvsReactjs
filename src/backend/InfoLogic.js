import Info from '../frontend/Info'
import { useForm } from "react-hook-form";
import axios from "../api/RestFullAPI";
import swal from 'sweetalert';
import { useState } from 'react';
import UpdateImageFireBase from "../backend/UpdateImageFireBase";
import firebase from "firebase"

function InfoLogic({ showNotification }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem("userLogin")))

    const [photo, setPhoto] = useState(userLogin.photo)

    console.log(userLogin)

    const onHanleChage = (data, e) => {
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: "Bạn có chắc chắn muốn thay đổi thông tin tài khoản !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    setData(data)
                } else {
                    swal("Đổi thông tin thất bại!");
                }
            });
    }

    const setData = (data) => {
        const { fullname, email } = data
        const userUpdate = { fullname, email, photo }
        updatUserLogin(userUpdate)
    }

    const updatUserLogin = (data) => {
        const userLoginOld = JSON.parse(localStorage.getItem("userLogin"))
        const { id, activated } = userLoginOld
        const { fullname, email, photo } = data
        const userLoginNew = {
            id, activated, fullname, email, photo
        }
        upDateUser(userLoginNew)
    }

    const upDateUser = async (data) => {
        try {
            const url = "/api/v2/user/update"
            const response = await axios.put(url, data)
            console.log(response)
            if (response === true) {
                showNotification('success', 'Success!', 'Cập nhập thông tin thành công !!!')
                upLocalStorage(data) // set lại user đã được cập nhập vào localstorage
            } else {
                showNotification('error', 'Error!', 'Cập nhập thông tin không thành công !')
            }
            return response
        } catch (error) {
            showNotification('error', 'Error!', 'Cập nhập thông tin không thành công !')
        }
    }

    // const upPhoto = async (data) => {
    //     try {
    //         var formData = new FormData();
    //         formData.append("photo", data[0]);

    //         const url = '/api/v1/user/photo'

    //         const response = await axios.postAnh(url, formData);

    //         const { status } = response
    //         if (status !== 200) {
    //             showNotification('error', 'Error!', 'Lỗi không thể đổi ảnh !!!')
    //         }
    //         console.log(response)
    //         return response;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const upLocalStorage = (data) => {
        localStorage.setItem("userLogin", JSON.stringify(data))
        setUserLogin(data)
    }

    const upImg = () => {
        try {
            const file = document.getElementById('img').files[0]
            let storagerRef = firebase.storage().ref(`images/${file.name}`);
            storagerRef.put(file).then(function () {
                storagerRef.getDownloadURL().then((url) => {
                    setPhoto(url)
                })
            })
        } catch (error) {
            showNotification('error', 'Error!', 'Cập nhập ảnh không thành công !')
        }

    }

    return (
        <Info
            onHanleChage={onHanleChage}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            userLogin={userLogin}
            upImg={upImg}
            image={photo}
        />
    )
}

export default InfoLogic;