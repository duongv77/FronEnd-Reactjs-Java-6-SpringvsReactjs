import {
    NavLink,useHistory
} from "react-router-dom";
import swal from 'sweetalert';

function Nav(props) {
    const history = useHistory()

    const logIn = () => {
        history.replace("/login")
    }
    console.log(props)
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
                    props.setUser(null)
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }
    return (
            <div>
                <div>
                    <header className="header_area sticky-header">
                        <div className="main_menu">
                            <nav className="navbar navbar-expand-lg navbar-light main_box">
                                <div className="container">
                                    {/* Brand and toggle get grouped for better mobile display */}
                                    <a className="navbar-brand logo_h" href="/home"><img src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Flogoy.png?alt=media&token=214fffac-45d2-41a6-b785-f77b46c550df" height="50px" alt="logo" /></a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    {/* Collect the nav links, forms, and other content for toggling */}
                                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                        <ul className="nav navbar-nav menu_nav ml-auto">
                                            <li className="nav-item">
                                                <NavLink activeClassName="active" to="/" className="nav-link">Trang chủ</NavLink></li>
                                            <li className="nav-item submenu dropdown">
                                                <a href className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cửa hàng</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/product">Sản phẩm</NavLink></li>
                                                    <li className="nav-item"><NavLink className="nav-link" to="/shoppingcard">Giỏ hàng</NavLink></li>
                                                    <li className="nav-item"><NavLink className="nav-link" to="/historyshopping">Lịch sử mua hàng</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <a href className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cá nhân</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="category.html">

                                                        </a>
                                                    </li>
                                                    {
                                                        props.user !== null ?
                                                            <div>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#" onClick={logOut} > Đăng xuất </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <NavLink className="nav-link" to="/changepw">Đổi mật khẩu</NavLink>
                                                                </li>
                                                            </div>

                                                            :
                                                            <li className="nav-item">
                                                                <NavLink className="nav-link" to="/login" onClick={logIn} > Đăng nhập </NavLink>
                                                            </li>
                                                    }
                                                    <li className="nav-item">
                                                        <NavLink activeClassName="active" className="nav-link" to="/info"  > Thông tin tài khoản </NavLink>
                                                    </li>
                                                    <li className="nav-item"><NavLink className="nav-link" to="/floworder">Theo dõi đơn hàng</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="active" className="nav-link" to="/contact">Liên hệ </NavLink>
                                            </li>
                                        </ul>
                                        <ul className="nav navbar-nav navbar-right">
                                            <li className="nav-item"><a href className="cart"><span className="ti-bag" /></a></li>
                                            <li className="nav-item">
                                                <button className="search"><span className="lnr lnr-magnifier" id="search" /></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
                
            </div>
    );
}
export default Nav;
