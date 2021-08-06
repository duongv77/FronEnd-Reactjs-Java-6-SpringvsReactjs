import AdminNav from "../Admin/fe/AdminNav"

const AdminLayout = (props) => {
    return(
        <>
            <div>
                <AdminNav />
                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default AdminLayout;