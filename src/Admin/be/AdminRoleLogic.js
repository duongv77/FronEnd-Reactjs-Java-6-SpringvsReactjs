import AdminRole from "../fe/AdminRole"
import UserAPI from "../../api/UserAPI";
import { useEffect, useState } from "react";
const AdminRoleLogic = () => {
    const [listUser, setListUser] = useState([])
    
    const callApiListUser = async() => {
        try {
            const url = "/api/v2/admin/user";
            const response = await UserAPI.get(url)
            setListUser(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        callApiListUser()
    }, [])

    const onChangCheckBox = (e, value) =>{
        console.log(e.target.checked)
        console.log(value)
    }
    return(
        <AdminRole listUser={listUser} onChangCheckBox={onChangCheckBox}/>
    )
}

export default AdminRoleLogic;