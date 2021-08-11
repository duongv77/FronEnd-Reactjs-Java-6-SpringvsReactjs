import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { NavLink } from 'react-router-dom';

function AdminUser(props) {

    const showRole =(value) => {
        if(value.length >1){
            return(
                <div>
                    <img height={20} src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2FUSER.png?alt=media&token=d53bc9cd-8da0-4710-a3a8-60848c4e27f1" alt=""/>
                    <img height={20} src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Fadmin.png?alt=media&token=ce891cb1-6f47-46d6-bf79-ac0991209746" alt=""/>
                </div>
            )
        }else if(value.length === 1){
            
            if(value[0].role.name === "ADMIN"){
                return(
                    <img height={20} src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2Fadmin.png?alt=media&token=ce891cb1-6f47-46d6-bf79-ac0991209746" alt=""/>
                )
            } else if(value[0].role.name === "USER"){
                return(
                    <img height={20} src="https://firebasestorage.googleapis.com/v0/b/fistproject-d19c7.appspot.com/o/images%2FUSER.png?alt=media&token=d53bc9cd-8da0-4710-a3a8-60848c4e27f1" alt=""/>
                )
            }
        }
    }

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);
    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    const classes = useStyles();
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    return (
        <div className="col-10 offset-1">
            <div className=" row mb-2 ">
                <div className="col-1">
                    <select class="form-select" >
                        <option selected>All</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>
                </div>
                <div className="col-2">
                    <select class="form-select" >
                        <option selected>Sắp xếp</option>
                        <option value="1">Theo tên</option>
                        <option value="2">Admin</option>
                        <option value="3">User</option>

                    </select>
                </div>
                <div className="col-4">
                    <input className="form-control me-2" type="search" placeholder="Tên người dùng..." aria-label="Search" />
                </div>
                <div className="col-1">
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button className="btn btn-outline-success " data-bs-toggle="modal" data-bs-target="#addProduct">Thêm account</button>
                    <NavLink to="/admin/user/role" className="btn btn-outline-danger ml-2">Phân quyền</NavLink>
                    <button className="btn btn-outline-primary ml-2" data-bs-toggle="modal" data-bs-target="#addProduct">Input Excel</button>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>STT</StyledTableCell>
                            <StyledTableCell align="left">Họ tên</StyledTableCell>
                            <StyledTableCell align="left">Tài khoản</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Trạng thái</StyledTableCell>
                            <StyledTableCell align="left">Hình ảnh</StyledTableCell>
                            <StyledTableCell align="left">Role</StyledTableCell>
                            <StyledTableCell align="left">Thao tác</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.listUser.map((value, index) => {
                                index++
                                return (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell > {index} </StyledTableCell>
                                        <StyledTableCell align="left">{value.fullname}</StyledTableCell>
                                        <StyledTableCell align="left">{value.username}</StyledTableCell>
                                        <StyledTableCell align="left">{value.email}</StyledTableCell>
                                        <StyledTableCell align="left"><Switch defaultChecked={value.activated === 1 ? true : false} onChange={(e) => { props.onChageSwith(e, value) }}/></StyledTableCell>
                                        <StyledTableCell align="left">
                                            <img src={value.photo} alt="Lỗi hiển thị!" height={50}/>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{showRole(value.userole)}</StyledTableCell>
                                        <StyledTableCell align="left" col="2">
                                                <a href="/" className="cdn mr-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" >
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                </a>
                                                <a href="#" className="cdn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                </a>
                                            </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            <div className="modal fade" id="addProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog " >
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title text-light" id="staticBackdropLabel">Thêm account</h5>
                            <button type="button" className="btn-close btn-light bg-light" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form onSubmit={(e) => {props.onSubmit(e)}}>
                            <div className="modal-body row">
                                <div>
                                    <label>Chọn file excel</label>
                                    <input type="file" id="fileExcel" className="form-control-file" />
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
export default AdminUser;