function NotFound() {
    return (
        <div className="text-danger font-weight-bold mt-5 pt-5">
            <br/>
            <div className="container-fluid mt-xxl-5">
                {/* 404 Error Text */}
                <div className="text-center mt-5">
                    <div className="error mx-auto" data-text={404}>404</div>
                    <p className="lead text-gray-800 mb-5">Page Not Found</p>
                    <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                    
                </div>
            </div>

        </div>
    )
}
export default NotFound;