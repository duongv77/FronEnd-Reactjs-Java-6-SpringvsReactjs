import { NavLink } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';

function ShoppingCard({ productCart, onClickInput, createOrder, onClickCheckbox ,total , deleteChecked}) {
    const sale = (product) => {
        try {
            return (
                <div>
                    <h5 className="text-danger"> {product.promotiondetail.promotion.sale}%</h5>
                </div>
            );
        } catch (error) { }
    };


    const money = (product, quantity) => {
        const { price } = product
        try {
            const { sale } = product.promotiondetail.promotion;
            let tong = price * quantity / 100 * (100 - sale)
            return (
                tong
            )
        } catch (error) {

            let tong
            tong = price * quantity

            return (
                tong
            )
        }
    }

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    return (
        <div>
            {/* Start Banner Area */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Giỏ hàng</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">
                                    Trang chủ
                                    <span className="lnr lnr-arrow-right" />
                                </NavLink>
                                <NavLink to="shoppingcard">Giỏ hàng</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Area */}
            {/*================Cart Area =================*/}
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">Sản phẩm</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Sale</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productCart.map(function (value, index) {
                                        
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <Checkbox
                                                        id="checkbox"
                                                        defaultChecked
                                                        inputProps={{ 'aria-label': 'primary  checkbox' }}
                                                        onClick={(e)=>{
                                                            onClickCheckbox(e, value)
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <NavLink to={`/productdetail_${value.product.id}`}>
                                                                <img
                                                                    src={value.product.image}
                                                                    alt={value.product.image}
                                                                    height="80"
                                                                />
                                                            </NavLink>

                                                        </div>
                                                        <div className="media-body">
                                                            <p>{value.product.name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>{numberWithCommas(value.product.price)} VNĐ</h5>
                                                </td>
                                                <td>
                                                    <div className="product_count">
                                                        <input type="number" onChange={(e) => { return onClickInput(e, value) }} className="input-text qty" defaultValue={value.quantity} />
                                                    </div>
                                                </td>
                                                <td>
                                                    {sale(value.product)}
                                                </td>
                                                <td>
                                                    <h5>{numberWithCommas(money(value.product, value.quantity))}</h5>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr className="bottom_button">
                                        <td><button className="btn btn-outline-danger" onClick={()=>{deleteChecked()}}>Delete</button></td>
                                        <td></td>
                                        <td></td>
                                        
                                        <td>
                                            <div className="cupon_text d-flex align-items-center">
                                                <input type="text" placeholder="Mã giảm giá...." />
                                                <a className="primary-btn" href="#">
                                                    Đồng ý
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Tổng</h5>
                                        </td>
                                        <td>
                                            <h4>{numberWithCommas(total)} VNĐ</h4>
                                        </td>
                                    </tr>
                                    <tr className="shipping_area">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="shipping_box">
                                                <select className="shipping_select">
                                                    <option selected>Chọn phương thức thanh toán</option>
                                                    <option value={1}>Momo</option>
                                                    <option value={2}>Smart Banking</option>
                                                    <option value={4}>ViettelPay</option>
                                                    <option value={5}>Thanh toán khi nhận hàng</option>
                                                </select>

                                                <select className="shipping_select">
                                                    <option selected>Chọn dịch vụ vận chuyển</option>
                                                    <option value={1}>Standard Express</option>
                                                    <option value={2}>Viettel Sport</option>
                                                    {/* <option value={4}>Select a State</option> */}
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="out_button_area">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <NavLink className="gray_btn" to="/">
                                                    Trang chủ
                                                </NavLink>
                                                <a type="button" class="primary-btn text-light ml-4" data-toggle="modal" data-target="#exampleModal">
                                                    Thanh toán
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/*================End Cart Area =================*/}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Bạn vui lòng nhập đúng địa chỉ !!!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <label>Nhập địa chỉ</label>
                            <input id="address" placeholder="VD:Số 30 Nguyễn Hy Quang, quận Đống Đa, Hà Nội..." className="form-control" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-outline-success" data-dismiss="modal" onClick={() => { createOrder() }}>Đồng ý</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShoppingCard;
