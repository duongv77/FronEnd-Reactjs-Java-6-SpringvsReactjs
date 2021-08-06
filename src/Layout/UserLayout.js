import Nav from '../frontend/Nav'
import Footer from '../frontend/Footer'
const WebsiteLayout = (props) => {
    return (
        <>
            <div>
                <Nav {...props}/>
                <main>{props.children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default WebsiteLayout;