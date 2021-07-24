import HomeLogic from "../backend/HomeLogic";
import LoginLogOutLogic from "../backend/LoginLogOutLogic";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import ContactLogic from '../backend/ContactLogic';
import ShoppingCardLogic from '../User/ShoppingCardLogic';
import HistoryShoppingLogic from '../User/HistoryShoppingLogic';
import InfoLogic from '../backend/InfoLogic';
import LoginLogic from '../backend/LoginLogic';
import Product from '../backend/ProductLogic';
import FlowOrderLogic from '../backend/FlowOrderLogic'
import CreateUseLogic from "../backend/CreateUserLogic";
import ForgetPassWordLogic from '../backend/ForgetPassWordLogic'
import ChangePassWordLogic from "../backend/ChangePassWordLogic";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axiosProduct from "../api/ProductAPI";
import NotFound from "./NotFound";
import axios from "../api/RestFullAPI";
import ProductDetailLogic from "../backend/ProductDetailLogic";

function Nav({SetUserLogin, user, setUser}) {
    const [listHangsx, setListHangsx] = useState([]);
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        const callApiHangsx = async () => {
            try{
                const url = "/api/v1/hangsx";
                
                const response = await axios.get(url)
                console.log(response)
                setListHangsx(response)
                return response;
            } catch (error) {
                console.log(error);
                showNotification("error", "Error!", "Không hiển thị hãng giày !");
            }
        };
        callApiHangsx();
    },[]);

    useEffect(()=>{
        const getAllProduct = async() =>{
            try {
                const url  = '/api/v1/product';
                const response = await axiosProduct.getAll(url)
                setListProduct(response)
                console.log(response)
                console.log()
                return response
            } catch (error) {
                
            }
        };
        getAllProduct();
        
    }, [])

    
    // alert
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
        <Router>
            <div>
               

                <div>
                    <header className="header_area sticky-header">
                        <div className="main_menu">
                            <nav className="navbar navbar-expand-lg navbar-light main_box">
                                <div className="container">
                                    {/* Brand and toggle get grouped for better mobile display */}
                                    <a className="navbar-brand logo_h" href="/home"><img src="img/logoy.png" height="50px" alt="logo" /></a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    {/* Collect the nav links, forms, and other content for toggling */}
                                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                        <ul className="nav navbar-nav menu_nav ml-auto">

                                            <li className="nav-item">
                                                <NavLink  activeClassName="active" to="/" className="nav-link">Trang chủ</NavLink></li>
                                            <li className="nav-item submenu dropdown">
                                                <a href className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cửa hàng</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><NavLink  activeClassName="active" className="nav-link" to="/product">Sản phẩm</NavLink></li>
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
                                                    <LoginLogOutLogic user={user} setUser={setUser}/>
                                                    <li className="nav-item">
                                                        <NavLink  activeClassName="active" className="nav-link" to="/info"  > Thông tin tài khoản </NavLink>
                                                    </li>
                                                    <li className="nav-item"><NavLink className="nav-link" to="/floworder">Theo dõi đơn hàng</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink  activeClassName="active" className="nav-link" to="/contact">Liên hệ </NavLink>
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
                        <div className="search_input" id="search_input_box">
                            <div className="container">
                                <form className="d-flex justify-content-between">
                                    <input type="text" className="form-control" id="search_input" placeholder="Tên giày bạn muốn tìm là gì..." />
                                    <button type="submit" className="btn" />
                                    <span className="lnr lnr-cross" id="close_search" title="Close Search" />
                                </form>
                            </div>
                        </div>
                    </header>
                </div>
                <Switch>
                    <Route exact path="/">
                        <HomeLogic
                            listHangsx={listHangsx}
                            />
                    </Route>
                    <Route exact path="/contact">
                        <ContactLogic />
                    </Route>
                    <Route exact path="/login"
                        render={() => {
                            return localStorage.getItem("accessTokenLogin") !== null ? <Redirect to="/home" /> : <LoginLogic SetUserLogin={SetUserLogin}
                            />
                        }}
                    >
                        <LoginLogic SetUserLogin={SetUserLogin} />
                    </Route>
                    <Route exact path="/createUser">
                        <CreateUseLogic
                            showNotification={showNotification}
                        />
                    </Route>
                    <Route exact path="/forgetpassword">
                        <ForgetPassWordLogic
                            showNotification={showNotification}
                        />
                    </Route>
                    <Route exact path="/changepw">
                        <ChangePassWordLogic 
                            showNotification={showNotification}
                        />
                    </Route>
                    <Route exact path="/info"
                        render={() => {
                            return localStorage.getItem("accessTokenLogin") === null ? <Redirect to="/login" /> : <InfoLogic showNotification={showNotification}
                            />
                        }}
                    >
                    </Route>
                    <Route exact path="/shoppingcard"
                        render ={()=>{
                            return localStorage.getItem("accessTokenLogin") === null ? <Redirect to="/login" />:  <ShoppingCardLogic showNotification={showNotification}/>
                        }}
                    >
                    </Route>
                    <Route exact path="/historyshopping"
                        render ={()=>{
                            return localStorage.getItem("accessTokenLogin") === null ? <Redirect to="/login" />:  <HistoryShoppingLogic />
                        }}
                    ></Route>
                    <Route exact path="/floworder"
                        render ={()=>{
                            return localStorage.getItem("accessTokenLogin") === null ? <Redirect to="/login" />:  <FlowOrderLogic />
                        }}
                    ></Route>
                    <Route exact path="/product"> 
                        <Product 
                            listHangsx={listHangsx} 
                            listProduct={listProduct} 
                            showNotification={showNotification}
                        />
                    </Route>
                    <Route exact
                        path = "/productdetail/:id"
                    >
                        <ProductDetailLogic
                            showNotification={showNotification}
                        />
                    </Route>
                    <Route path="/*">
                        <NotFound />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>


    );
}
export default Nav;
