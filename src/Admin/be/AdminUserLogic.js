import AdminUser from "../fe/AminUser";
import UserAPI from "../../api/UserAPI";
import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import swal from 'sweetalert';

const AdminUserLogic = (props) => {
    const [listUser, setListUser] = useState([])
    const [listUserExcel , setListUserExcel] = useState([])

    useEffect(()=> {
        const callApiUserShowAll = async() => {
            try {
                const url = "/api/v2/admin/user"
                const response = await UserAPI.get(url)
                setListUser(response)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        callApiUserShowAll()
    },[])

    const onSubmit = (e) => {
        e.preventDefault()
        var files = document.getElementById('fileExcel').files[0]
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];

            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, {header:2});
            callApiAddListUser(dataParse);
        };
        reader.readAsBinaryString(files)
    }

    const callApiAddListUser = async(value) => {
        try {
            const url = "/api/v2/admin/listuser"
            const response = await UserAPI.post(url, value)
            if(response==="success"){
                swal({
                    title: "Success!",
                    text: "Input file excel thành công!",
                    icon: "success",
                    button: "OK!",
                  });
            }else{
                props.showNotification('error', 'Lỗi !', response)
            }
        } catch (error) {
           console.log(error) 
        }
    }

    const onChageSwith = (e, value) => {
        callApiActivated(e.target.checked, value.id)
    } 

    const callApiActivated = async(value , id) =>{
        let activated = value === true ? 1 : 0
        try {
            const url = `/api/v2/admin/user_${id}/activated_${activated}`
            const response = await UserAPI.get(url)
            console.log(response)
            props.showNotification('success', 'Success !', "Cập nhập trạng thái thành công!")
        } catch (error) {
            console.log(error)
            props.showNotification('error', 'Lỗi !', "Cập nhập trạng thái không thành công!")
        }
    }

    return(
        <AdminUser listUser={listUser} onSubmit={onSubmit} onChageSwith={onChageSwith}/>
    )
}

export default AdminUserLogic;