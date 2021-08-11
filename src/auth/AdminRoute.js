import { Redirect, Route } from "react-router";

const AdminRoute = ({children}) => {
    const checkAdmin = () => {
        let check = false;
        const user = JSON.parse(localStorage.getItem("userLogin"))
        if(user===null){
            return false
        }
        if(user === "undefined") return false;
        const {userole} = user
        userole.map((value) => {
            if(value.role.name === "ADMIN" ) {
                check = true
            }
        })
        return check
    }

    return(
        <Route 
            render = {() => {
                return checkAdmin() ? (
                    children
                ) : (
                    <Redirect to={{ pathname: "/"}}/>
                );
            }}
        />
    )
}
export default AdminRoute;