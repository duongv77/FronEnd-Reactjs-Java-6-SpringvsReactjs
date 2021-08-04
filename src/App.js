import "./App.css";
import Nav from "./frontend/Nav";
import AdminNav from "./Admin/fe/AdminNav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { useState } from "react";
import LoginLogic from "./backend/LoginLogic";
import firebase from "./firebase"
import PromotionApi from "./api/PromotionAPI";
import { useEffect } from "react";
import swal from 'sweetalert';
import { useHistory } from "react-router";

function App() {
  const [user, setUser] = useState(localStorage.getItem("userLogin"))
  const history = useHistory()

  const SetUserLogin = (data) => {
        

    // //lưu vào localStorage đổi obj thành json
    // localStorage.setItem('accessTokenLogin', JSON.stringify(data))
    // const user = localStorage.getItem('accessTokenLogin')

    // //Lấy từ trong localStorage được mã hóa lại
    // console.log("user đăng nhập lưu trong localStorage ", JSON.parse(user))

     setUser(data)
}
// let accessTokenLogin = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJ1c2VybmFtZVwiOlwiZHVvbmdkYW9cIixcInBhc3N3b3JkXCI6XCIkMmEkMTAkd204bS4xNnZ3dUhUQUxONnZtZ1A5T1lDTTZKTUVnR2FpSS9sWEQwNHkyT1lxOFFwZ1QydHlcIixcImFjdGl2YXRlZFwiOjEsXCJhZG1pblwiOjF9IiwiZXhwIjoxNjI3MjA4OTcxLCJpYXQiOjE2MjcxOTA5NzF9.vb9SeSbgwStkSKdiv7TVQe_sFwIc6AzkdQwZ8rbcsjBqWBY-PQgIjfahMwonn_d2DYjI6-ZzzxT3HwZkOFWtHg"
// localStorage.setItem('accessTokenLogin', accessTokenLogin)

useEffect(()=>{
  const testDateJwt = async() =>{
    try {
      const url = "/api/v2/admin/jwt"
      const response  = await PromotionApi.get(url)
      console.log(response)
    } catch (error) {
      console.log(error)
      const {message} = error.response.data
      if(message==="Unauthorized"){
        swal({
          title: "Chú ý?",
          text: "Phiên đăng nhập của bạn đã hết hạn !",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          localStorage.removeItem("accessTokenLogin")
          localStorage.removeItem("userLogin")
          // if (willDelete) {
          //   history.replace('/login')
          // } 
        });
      }
    }
  }
  if(localStorage.getItem('accessTokenLogin')!==null){
    testDateJwt()
  }
},[])


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav SetUserLogin={SetUserLogin} user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/admin" 
            render ={()=>{
              return localStorage.getItem("accessTokenLogin") === null ? <Redirect to="/login" />:  <AdminNav SetUserLogin={SetUserLogin}/>
          }}
          ></Route>
          <Route exact path="/login">
            <LoginLogic SetUserLogin={SetUserLogin}/>
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
