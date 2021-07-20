import {
    NavLink,
} from "react-router-dom";
function ChangePassWord({ register, handleSubmit,errors  ,onHandleSubmit}) {
    const userLogin = localStorage.getItem("accessTokenLogin")

    return (
        <div>
            <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Cá nhân/Đổi mật khẩu</h1>
                                <nav className="d-flex align-items-center">
                                    <NavLink to="/">Cá nhân<span className="lnr lnr-arrow-right" /></NavLink>
                                    <NavLink to="/changepw">Đăng xuất/Đổi mật khẩu/Theo dõi đơn hàng</NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            <section className="login_box_area section_gap ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-3">
                            <div className="login_form_inner">
                                <h3>Đổi mật khẩu</h3>
                                <form className="row login_form pb-5" onSubmit={handleSubmit(onHandleSubmit)}>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control"  placeholder="Mật khẩu cũ" {...register("password", { required: true })}/>
                                        {errors.password && <span className="ml-2 d-flex justify-start text-danger">Không được để trống</span>}
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" placeholder="Mật khẩu mới" {...register("passwordnew", { required: true })}/>
                                        {errors.passwordnew && <span className="ml-2 d-flex justify-start text-danger">Không được để trống</span>}
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" placeholder="Nhập lại mật khẩu mới" {...register("passwordconfirm", { required: true })}/>
                                        {errors.password && <span className="ml-2 d-flex justify-start text-danger">Không được để trống</span>}
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" className="primary-btn">Đồng ý</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ChangePassWord;