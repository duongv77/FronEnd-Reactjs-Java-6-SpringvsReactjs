import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    useHistory
} from "react-router-dom";
import AdminProduct from "../be/AdminProductLogic";
import AdminHome from "./AdminHome";
import AdminUser from "./AminUser";
import AdminSaleLogic from "../be/AdminSaleLogic";
import AdminSaleDetail from "./AdminSaleDetail";
import swal from 'sweetalert';

function AdminNav() {
    let user;
    const history = useHistory()
    const getLocalUser = () => {
        try {
            user = JSON.parse(localStorage.getItem("userLogin"))
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
    const { photo, fullname, activated } = user

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("userLogin")
        localStorage.removeItem("accessTokenLogin")
        history.push("/login")
    }

    var notification;
    var container = document.querySelector('#notification-container');
    var visible = false;
    var queue = [];

    function createNotification() {
        notification = document.createElement('div');
        var btn = document.createElement('button');
        var title = document.createElement('div');
        var msg = document.createElement('div');
        btn.className = 'notification-close';
        title.className = 'notification-title';
        msg.className = 'notification-message';
        btn.addEventListener('click', hideNotification, false);
        notification.addEventListener('animationend', hideNotification, false);
        notification.addEventListener('webkitAnimationEnd', hideNotification, false);
        notification.appendChild(btn);
        notification.appendChild(title);
        notification.appendChild(msg);
    }

    function updateNotification(type, title, message) {
        notification.className = 'notification notification-' + type;
        notification.querySelector('.notification-title').innerHTML = title;
        notification.querySelector('.notification-message').innerHTML = message;
    }

    function showNotification(type, title, message) {
        if (visible) {
            queue.push([type, title, message]);
            return;
        }
        if (!notification) {
            createNotification();
        }
        updateNotification(type, title, message);
        container.appendChild(notification);
        visible = true;
    }

    function hideNotification() {
        if (visible) {
            visible = false;
            container.removeChild(notification);
            if (queue.length) {
                showNotification.apply(null, queue.shift());
            }
        }
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
                                <img className="mr-2" src={photo} alt={photo} height={40} />
                                <span>{fullname}</span>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default AdminNav;