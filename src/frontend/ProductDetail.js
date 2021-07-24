import {  NavLink} from "react-router-dom";
import swal from 'sweetalert';

function  ProductDetail({product, showValueSale, showPrice, showNotification}){
    const tenPr =()=>{
        try {
            const {name} = product.productype
            return name
        } catch (error) {
            
        }
    }

    const showMess = () =>{
        console.log("vãi c")
        swal({
            title: "Good job!",
            text: "Gửi thành công!",
            icon: "success",
            button: "Aww yiss!",
          });
    }
    return(
        <div>
            {/* Start Banner Area */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Chi tiết sản phẩm</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Trang chủ<span className="lnr lnr-arrow-right" /></NavLink>
                                <NavLink to="/product">Cửa hàng<span className="lnr lnr-arrow-right" /></NavLink>
                                <a href="#">Chi tiết sản phẩm</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Area */}
            {/*================Single Product Area =================*/}
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <div className="s_Product_carousel">
                                <div className="single-prd-item">
                                    <a href={product.image}><img className="img-fluid" src={product.image} alt={product.image} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{product.name}</h3>
                                {showPrice(product.price, product.promotiondetail)}
                                {showValueSale(product.promotiondetail)}
                                <ul className="list">
                                    <li><a className="active" href><span>Hãng sản xuất</span> : {tenPr()}</a></li>
                                    <li><a href><span>Trạng thái</span> : {product.available===1?"Còn hàng" : "Hết hàng"}</a></li>
                                </ul>
                                <p>{product.description}</p>
                                <div className="product_count">
                                    <label htmlFor="qty">Quantity:</label>
                                    <input type="number" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                                    {/* <button onclick={function(){var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;}} className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                                    <button onclick={function(){var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;}} className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button> */}
                                </div>
                                <div className="card_area d-flex align-items-center">
                                    <a className="primary-btn" href="#">Add to Cart</a>
                                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond" /></a>
                                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-heart" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================End Single Product Area =================*/}
            {/*================Product Description Area =================*/}
            <section className="product_description_area">
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes
                                and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
                                Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
                                London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
                                officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
                                job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
                                showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
                                child’s painting set for her birthday and it was with this that she produced her first significant work, a
                                half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
                                named ‘Hangover’ by Beryl’s husband and</p>
                            <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
                                more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
                                the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
                                more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
                                streamlined plan of cooking that is more efficient for one person creating less</p>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5>Width</h5>
                                            </td>
                                            <td>
                                                <h5>128mm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Height</h5>
                                            </td>
                                            <td>
                                                <h5>508mm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Depth</h5>
                                            </td>
                                            <td>
                                                <h5>85mm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Weight</h5>
                                            </td>
                                            <td>
                                                <h5>52gm</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Quality checking</h5>
                                            </td>
                                            <td>
                                                <h5>yes</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Freshness Duration</h5>
                                            </td>
                                            <td>
                                                <h5>03days</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>When packeting</h5>
                                            </td>
                                            <td>
                                                <h5>Without touch of hand</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Each Box contains</h5>
                                            </td>
                                            <td>
                                                <h5>60pcs</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="comment_list">
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Freview-1.png?alt=media&token=814cbccc-048f-4986-b492-59c78c05bacb" alt />
                                                </div>
                                                <div className="media-body">
                                                    <h4>Blake Ruiz</h4>
                                                    <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                    <a className="reply_btn" href="#">Reply</a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo</p>
                                        </div>
                                        <div className="review_item reply">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Freview-2.png?alt=media&token=22f2a6f0-8130-4816-bb3d-53bfa23b35ad" alt />
                                                </div>
                                                <div className="media-body">
                                                    <h4>Blake Ruiz</h4>
                                                    <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                    <a className="reply_btn" href="#">Reply</a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo</p>
                                        </div>
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Freview-3.png?alt=media&token=e13dae89-1758-4b45-8152-29cdd347903f" alt />
                                                </div>
                                                <div className="media-body">
                                                    <h4>Blake Ruiz</h4>
                                                    <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                    <a className="reply_btn" href="#">Reply</a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="review_box">
                                        <h4>Post a comment</h4>
                                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-right">
                                                <button type="reset" className="primary-btn" 
                                                >Gửi cho tôi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row total_rate">
                                        <div className="col-6">
                                            <div className="box_total">
                                                <h5>Overall</h5>
                                                <h4>4.0</h4>
                                                <h6>(03 Reviews)</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="rating_list">
                                                <h3>Based on 3 Reviews</h3>
                                                <ul className="list">
                                                    <li><a href="#">5 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">4 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">3 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">2 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">1 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review_list">
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Freview-1.png?alt=media&token=814cbccc-048f-4986-b492-59c78c05bacb" alt />
                                                </div>
                                                <div className="media-body">
                                                    <h4>Blake Ruiz</h4>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo</p>
                                        </div>
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Freview-2.png?alt=media&token=22f2a6f0-8130-4816-bb3d-53bfa23b35ad" alt />
                                                </div>
                                                <div className="media-body">
                                                    <h4>Blake Ruiz</h4>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo</p>
                                        </div>
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Freview-3.png?alt=media&token=e13dae89-1758-4b45-8152-29cdd347903f" alt />
                                                </div>
                                                <div className="media-body">
                                                    <h4>Blake Ruiz</h4>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="review_box">
                                        <h4>Add a Review</h4>
                                        <p>Your Rating:</p>
                                        <ul className="list">
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                        </ul>
                                        <p>Outstanding</p>
                                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" id="message" rows={1} placeholder="Review" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-right">
                                                <button type="reset" className="primary-btn" 
                                                >Gửi cho tôi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================End Product Description Area =================*/}
        </div>

    )
}

export default ProductDetail;