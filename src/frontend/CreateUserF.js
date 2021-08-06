import Footer from "./Footer";
import {
    Link
} from "react-router-dom";

function CreateUser({register, handleSubmit, errors,onHandleSubmit}) {
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    return (
        <div>
            
            <div>
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Login/Register</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="index.html">Home<span className="lnr lnr-arrow-right" /></a>
                                    <a href="category.html">Register</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================Login Box Area =================*/}
                <section className="login_box_area section_gap">
                    <div className="container">
                        <form  onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="row">
                                <div className="col-lg-6 offset-3">
                                    <div className="login_form_inner">
                                        <h3>Đăng kí tài khoản</h3>
                                        <div className="row login_form" >
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" placeholder="Username đăng nhập..." {...register("username", { required: true })} />
                                                {errors.fullname && <span className="text-danger">Vui lòng không để trống !</span>}
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="email" className="form-control" placeholder="Email..." {...register("email", { required: true })} />
                                                {errors.email && <span className="text-danger">Vui lòng không để trống !</span>}
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" placeholder="Họ tên..." {...register("fullname", { required: true })} />
                                                {errors.username && <span className="text-danger">Vui lòng không để trống !</span>}
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="password" className="form-control" placeholder="Mật khẩu..."  {...register("password", { required: true })} />
                                                {errors.password && <span className="text-danger">Vui lòng không để trống !</span>}
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <div>
                                                    <input type="submit" className="primary-btn"  value="Đăng kí"/>
                                                </div>
                                            </div>
                                                <Link className="btn btn-outline-danger mb-4" to="/login">Quay lại</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                {/*================End Login Box Area =================*/}
            </div>
        </div>

    )
}
export default CreateUser;