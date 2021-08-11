import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    useHistory
} from "react-router-dom";
import swal from 'sweetalert';

function AdminNav() {
    let user;
    const history = useHistory()
    const getLocalUser = () => {
        try {
            user = JSON.parse(localStorage.getItem("userLogin"))
            if(user === null){
                history.replace("/")
            }
        } catch (error) {
            swal({
                title: "Chú ý?",
                text: "Phiên đăng nhập của bạn đã hết hạn !",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    localStorage.removeItem("accessTokenLogin")
                    localStorage.removeItem("userLogin")
                    // if (willDelete) {
                    //   history.replace('/login')
                    // } 
                });
        }
    }

    getLocalUser()

    

    const photo = () => {
        try {
            const { photo } = user
            return photo
        } catch (error) {
            
        }
        
    }
    const fullname = () => {
        try {
             const { fullname} = user
            return fullname
        } catch (error) {
            
        }
       
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("userLogin")
        localStorage.removeItem("accessTokenLogin")
        history.push("/login")
    }

    return (
        <div>
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/admin">Admin</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link " aria-current="page" to="/admin/product">Sản Phẩm</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/user">Người dùng</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Khác
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="/">Giao diện người dùng</a></li>
                                            <li><NavLink className="dropdown-item" to="/admin/sale">Thiết lập Sale</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item" href onClick={(e) => { logout(e) }} >
                                                    Đăng xuất
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img className="mr-2" src={photo()} alt={photo()} height={40} />
                                <span>{fullname()}</span>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default AdminNav;