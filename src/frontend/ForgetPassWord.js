import {
    useHistory,
    Link
} from "react-router-dom";

function ForgetPassWord({register, handleSubmit, errors, onHandleSubmit}){

    let history = useHistory()
    const onCreateUser = (e) => {
        e.preventDefault()
        history.replace("/createUser")
    }
    
    return(
        <div>
            <div>
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Đăng nhập/Đăng kí</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="/home">Trang Chủ<span className="lnr lnr-arrow-right" /></a>
                                    <a href="/login">Đăng nhập/Đăng kí</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================Login Box Area =================*/}
                <section className="login_box_area section_gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="login_box_img">
                                    <img className="img-fluid" src="img/login.jpg" alt="" />
                                    <div className="hover">
                                        <h4>Bạn lần đầu truy cập vào website?</h4>
                                        <p>Chúng tôi sẽ đem đến cho bạn trải nghiệm tuyệt vời và sản phẩm tốt nhất !!!</p>
                                        <a className="primary-btn" href onClick={(e) => { return onCreateUser(e) }}>Tạo tài khoản</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login_form_inner">
                                    <h3>Quên mật khẩu</h3>
                                    <form className="row login_form" action="" onSubmit={handleSubmit(onHandleSubmit)}>
                                        <div className="col-md-12 form-group">
                                            <input type="email" className="form-control" defaultValue="dd22042001@gmail.com" placeholder="Email đăng kí tài khoản..." {...register("email", { required: true })} />
                                            {errors.exampleRequired && <span className="text-danger">Vui lòng không để trống !</span>}
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div>
                                                <button type="submit" className="primary-btn" >Đồng ý</button>
                                            </div>
                                        </div>
                                    </form>
                                    <Link to='/login'><button className=" col-md-7 btn btn-outline-warning">Quay lại</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================End Login Box Area =================*/}

            </div>
                {/* <Route path="/home" render={()=>{
              return <Redirect to="/home" />
          }}>
          </Route> */}
        </div>
    )
}
export default ForgetPassWord;