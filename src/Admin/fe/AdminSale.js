import { NavLink } from "react-router-dom";

const AdminSale = ({ listSale, register, handleSubmit, errors, onSubmit , onClickDelete}) => {
    return (
        <div className="row">
            {
                listSale.map((value, index) => {
                    return (
                        <div className="col-3" key={index}>
                            <div className="card mt-2" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title text-success">{value.name}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <p className="card-text text-danger font-italic">Giảm giá sản phẩm: {value.sale} %</p>
                                    <p className="card-text">Ngày tạo: {value.createdate}</p>
                                    <NavLink className="btn btn-outline-success" to={`/admin/sale/${value.id}`}>Xem chi tiết</NavLink>
                                    <button className="btn btn-outline-danger ml-2 "
                                        onClick={()=>{onClickDelete(value.id)}}
                                    >Xóa</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="col-3">
                <a href="#" className="add-product" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-square-o" aria-hidden="true" ></i></a>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Tạo chương trình sale</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="modal-body">
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Tên chương trình</label>
                                        <input type="text" className="form-control" id="name" placeholder="Tên chương trình ..." {...register("name", { required: true })}/>
                                        {errors.name && <span className="text-danger">Không được để trống</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="sale" className="form-label">Giảm giá %: </label>
                                        <input type="number" className="form-control" id="sale" placeholder="Phần trăm giảm giá ..." {...register("oldsale", { required: true })}/>
                                        {errors.oldsale && <span className="text-danger">Không được để trống</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Mô tả</label>
                                        <textarea className="form-control" id="description" placeholder="Mô tả ..." rows={3} defaultValue={""} {...register("description", { required: true })}/>
                                        {errors.description && <span className="text-danger">Không được để trống</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Đóng</button>
                                <button type="submit" className="btn btn-outline-success" data-bs-dismiss="modal">Thêm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminSale;