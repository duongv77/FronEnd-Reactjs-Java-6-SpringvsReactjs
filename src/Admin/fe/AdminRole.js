import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const AdminRole = (props) => {

    const checkUser =(value) => {
        let check = false
        value.map((val)=>{
            if(val.role.name==="USER"){
                check = true
            }
        })
        return check
    }
    const checkAdmin =(value) => {
        let check = false
        value.map((val)=>{
            if(val.role.name==="ADMIN"){
                check = true
            }
        })
        return check
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
                <div className="col-4">
                    <input className="form-control me-2" type="search" placeholder="Tên người dùng..." aria-label="Search" />
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Photo</StyledTableCell>
                            <StyledTableCell align="left">Username</StyledTableCell>
                            <StyledTableCell align="center">User</StyledTableCell>
                            <StyledTableCell align="center">Admin</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.listUser.map((value) => {
                                return (
                                    <StyledTableRow key={value.id}>
                                        <StyledTableCell > <img src={value.photo} alt="Error" height={50}/> </StyledTableCell>
                                        <StyledTableCell align="left">{value.username}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Checkbox
                                                defaultChecked = {checkUser(value.userole) ? true : false}
                                                onChange={(e)=>{props.onChangCheckBox(e, value)}}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Checkbox
                                                defaultChecked = {checkAdmin(value.userole) ? true : false}
                                                onChange={(e)=>{props.onChangCheckBox(e, value)}}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdminRole;