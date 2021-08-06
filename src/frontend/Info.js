
function Info({ onHanleChage, register, handleSubmit, errors , userLogin, upImg, image}) {
    const { photo, fullname, email, activated } = userLogin
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    return (
        <div>
            <section className="login_box_area section_gap mt-5">
                <div className="container-fluid mt-5 ">
                    <div className="row pb-5">

                        <div className="col-lg-8 offset-2 pb-5">
                            <div className="login_form_inner pb-5">
                                <form enctype="multipart/form-data" onSubmit={handleSubmit(onHanleChage)}>
                                    <div className="row pb-5">
                                        <div className="col-lg-5 max-withd" >
                                            <img src={ image} className="img-max" alt={image} />
                                            <input type="file" {...register("file")} id="img" onChange={()=>{return upImg()}}/>
                                        </div>
                                        <div className="col-lg-7 text-left d-flex justify-content-start">
                                            <div className="row login_form pb-5" >
                                                <div className="col-md-12 form-group">
                                                    <label>Họ tên:</label>
                                                    <input type="text" defaultValue={fullname} className="form-control" placeholder="Mật khẩu cũ" {...register("fullname", { required: true })} />
                                                    {errors.username && <span className="text-danger">Không được để trống họ tên</span>}
                                                </div>

                                                <div className="col-md-12 form-group">
                                                    <label>Email đăng kí:</label>
                                                    <input type="email" defaultValue={email} className="form-control" placeholder="Mật khẩu mới" {...register("email", { required: true })} />
                                                    {errors.email && <span className="text-danger">Không được để trống email</span>}
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <div className="col-md-12 form-group mb-4">
                                                        <label>Trạng thái:  {activated === 1 ? "Đang hoạt động" : "Ngưng hoạt động"}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <button type="submit" className="primary-btn">Cập nhập</button>
                                                </div>

                                            </div>
                                        </div>

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
export default Info;