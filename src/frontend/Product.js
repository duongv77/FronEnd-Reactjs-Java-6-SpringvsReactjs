import {
    NavLink,
} from "react-router-dom";


function Product({listHangsx, listProductToHangsx,  showAllProduct, showValueSale, showListProduct, showPrice, onChangePage, onClickPage, onChanSeach, onClickAddCart}) {
    
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    return (
        <div id="category">
            <div>
               
                {/* Start Banner Area */}
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Sản phẩm</h1>
                                <nav className="d-flex align-items-center">
                                    <NavLink to="/">Trang chủ<span className="lnr lnr-arrow-right" /></NavLink>
                                    <NavLink to="/product">Shop<span className="lnr lnr-arrow-right" /></NavLink>
                                    <a href="category.html">Fashon Category</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Area */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="sidebar-categories">
                                <div className="head">Browse Categories</div>
                                <ul className="main-categories">
                                    <li className="main-nav-list">
                                        <a href="/#" onClick={(e)=>{return showAllProduct(e)}}>Tất cả</a>
                                    </li>
                                    {
                                        listHangsx.map(function(value, index){
                                            const {id} = value
                                            return(
                                                <li className="main-nav-list" key={index}>
                                                    <a href="/#" onClick={(e)=>{return showListProduct(e, id)}} >{value.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7">
                            {/* Start Filter Bar */}
                            <div className="filter-bar d-flex flex-wrap align-items-center">
                                <div className="sorting">
                                    <select id="sort" onChange={onChangePage}  >
                                        <option value={0}>trống</option>
                                        <option value={1}>Sắp xếp theo giá giảm dần</option>
                                        <option value={2}>Sắp xếp theo giá tăng dần</option>
                                        <option value={3}>Sắp xếp theo tên</option>
                                    </select>
                                </div>
                                <div className="sorting mr-auto">
                                    <select id="amount" onChange={onChangePage} >
                                        <option value={6}>Show 6</option>
                                        <option value={9}>Show 9</option>
                                        <option value={12}>Show 12</option>
                                        <option value={15}>Show 15</option>
                                        <option value={24}>Show 24</option>
                                    </select>
                                </div>
                                <div className="sorting mr-auto ">
                                    <input placeholder="Tìm kiếm..."  onChange={(e)=>{onChanSeach(e)}} className="form-control "/>
                                </div>
                                <div className="pagination">
                                    {/* <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true" /></a> */}
                                    <button onClick={(e)=>{onClickPage(e)}} className="btn btn-light mr-2" value={0}>1</button>
                                    <button onClick={(e)=>{onClickPage(e)}} className="btn btn-light mr-2" value={1}>2</button>
                                    <button onClick={(e)=>{onClickPage(e)}} className="btn btn-light mr-2" value={2}>3</button>
                                    <button onClick={(e)=>{onClickPage(e)}} className="btn btn-light mr-2" value={3}>4</button>
                                    <button onClick={(e)=>{onClickPage(e)}} className="btn btn-light mr-2" value={4}>5</button>
                                    {/* <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a> */}
                                </div>
                            </div>
                            {/* End Filter Bar */}
                            {/* Start Best Seller */}
                            <section className="lattest-product-area pb-40 category-list">
                                <div className="row">
                                    {/* single product */}

                                    {
                                        listProductToHangsx.map(function(value, index){
                                            return(
                                                <div className="col-lg-4 col-md-6" key={index}>
                                                    <div className="single-product">
                                                        
                                                        <img className="img-fluid" src={value.image} alt={value.image} />
                                                        <div className="product-details">
                                                            <div className="prd-bottom">
                                                                <a href className="social-info" onClick={()=>{onClickAddCart(value.id)}}>
                                                                    <span className="ti-bag" />
                                                                    <p className="hover-text">add to bag</p>
                                                                </a>
                                                                <a href className="social-info">
                                                                    <span className="lnr lnr-heart" />
                                                                    <p className="hover-text">Wishlist</p>
                                                                </a>
                                                                <a href className="social-info">
                                                                    <span className="lnr lnr-sync" />
                                                                    <p className="hover-text">compare</p>
                                                                </a>
                                                                <NavLink className="social-info" 
                                                                to={`/productdetail/${value.id}`}
                                                                // to={`/product/view/${value.id}`}
                                                                
                                                                >
                                                                    <span className="lnr lnr-move" />
                                                                    <p className="hover-text">view more</p>
                                                                </NavLink>
                                                            </div>
                                                            <h6>{value.name}</h6>
                                                            {showValueSale(value.promotiondetail)}
                                                            <div className="price">
                                                                {showPrice(value.price, value.promotiondetail)}
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                    {/* single product */}
                                    
                                </div>
                            </section>
                            {/* End Best Seller */}
                        </div>
                    </div>
                </div>
                {/* Start related-product Area */}
                <section className="related-product-area section_gap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>Deals of the Week</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r1.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r2.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r3.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r5.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r6.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r7.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r9.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r10.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r11.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ctg-right">
                                    <a href="#" target="_blank">
                                        <img className="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End related-product Area */}
                {/* Modal Quick Product View */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="container relative">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="product-quick-view">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="quick-view-carousel">
                                            <div className="item" style={{ background: 'url(img/organic-food/q1.jpg)' }}>
                                            </div>
                                            <div className="item" style={{ background: 'url(img/organic-food/q1.jpg)' }}>
                                            </div>
                                            <div className="item" style={{ background: 'url(img/organic-food/q1.jpg)' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="quick-view-content">
                                            <div className="top">
                                                <h3 className="head">Mill Oil 1000W Heater, White</h3>
                                                <div className="price d-flex align-items-center"><span className="lnr lnr-tag" /> <span className="ml-10">$149.99</span></div>
                                                <div className="category">Category: <span>Household</span></div>
                                                <div className="available">Availibility: <span>In Stock</span></div>
                                            </div>
                                            <div className="middle">
                                                <p className="content">Mill Oil is an innovative oil filled radiator with the most modern technology. If you are
                                                    looking for something that can make your interior look awesome, and at the same time give you the pleasant
                                                    warm feeling during the winter.</p>
                                                <a href="#" className="view-full">View full Details <span className="lnr lnr-arrow-right" /></a>
                                            </div>
                                            <div className="bottom">
                                                <div className="color-picker d-flex align-items-center">Color:
                                                    <span className="single-pick" />
                                                    <span className="single-pick" />
                                                    <span className="single-pick" />
                                                    <span className="single-pick" />
                                                    <span className="single-pick" />
                                                </div>
                                                <div className="quantity-container d-flex align-items-center mt-15">
                                                    Quantity:
                                                    <input type="text" className="quantity-amount ml-15" defaultValue={1} />
                                                    <div className="arrow-btn d-inline-flex flex-column">
                                                        <button className="increase arrow" type="button" title="Increase Quantity"><span className="lnr lnr-chevron-up" /></button>
                                                        <button className="decrease arrow" type="button" title="Decrease Quantity"><span className="lnr lnr-chevron-down" /></button>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-20">
                                                    <a href="#" className="view-btn color-2"><span>Add to Cart</span></a>
                                                    <a href="#" className="like-btn"><span className="lnr lnr-layers" /></a>
                                                    <a href="#" className="like-btn"><span className="lnr lnr-heart" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;