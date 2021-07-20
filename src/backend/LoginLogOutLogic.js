import LoginLogOut from '../frontend/LoginLogOut'
import {  Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';

function LoginLogOutLogic({ user, setUser }) {
    const history = useHistory()

    const logIn = () => {
        history.replace("/login")
    }

    const logOut = () => {
        swal({
            title: "Are you sure?",
            text: "Bạn muốn đăng xuất khỏi website ??",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Đăng xuất thành công", {
                        icon: "success",
                    });
                    history.replace("/login")
                    localStorage.removeItem("accessTokenLogin")
                    localStorage.removeItem("userLogin")
                    setUser(null)
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }


    const renDer = () => {
        return (
            <div>
                {
                    user !== null ?
                        <div>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={logOut} > Đăng xuất </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/changepw">Đổi mật khẩu</Link>
                            </li>
                        </div>

                        :
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={logIn} > Đăng nhập </a>
                        </li>
                }
            </div>
        )
    }

    return (
        <LoginLogOut
            renDer={renDer}
        />
    )
}

export default LoginLogOutLogic;