import {
    NavLink,
} from "react-router-dom";

function Contact(){
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    return(
        <div>
            {/* Start Banner Area */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Liên hệ với tôi</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Trang chủ<span className="lnr lnr-arrow-right" /></NavLink>
                                <NavLink to="/contact">Liên hệ</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Area */}
            {/*================Contact Area =================*/}
            <section className="contact_area section_gap_bottom">
                <div className="container">
                    <br/>
                    <div className="row">
                        <div className="col-lg-3 mt-5">
                            <div className="contact_info">
                                <div className="info_item">
                                    <i className="lnr lnr-home" />
                                    <h6>Đống Đa, Hà Nội</h6>
                                    <p>Số 30, phố Nguyễn Hy Quang</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-phone-handset" />
                                    <h6><a href="#">039 696 3211</a></h6>
                                    <p>Gọi điện là nhấc máy. Oke chưa?</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-envelope" />
                                    <h6><a href="#">duongdeptrai.0hutthuoc@gmail.com</a></h6>
                                    <p>Gửi bất kì câu hỏi nào cho tôi!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="message" rows={1} placeholder="Enter Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type="reset" value="submit" className="primary-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*================Contact Area =================*/}
        </div>

    )
}
export default Contact;