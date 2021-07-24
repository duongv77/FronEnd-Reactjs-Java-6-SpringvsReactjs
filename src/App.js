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

function App() {
  const [user, setUser] = useState(localStorage.getItem("userLogin"))
  const SetUserLogin = (data) => {
        

    // //lưu vào localStorage đổi obj thành json
    // localStorage.setItem('accessTokenLogin', JSON.stringify(data))
    // const user = localStorage.getItem('accessTokenLogin')

    // //Lấy từ trong localStorage được mã hóa lại
    // console.log("user đăng nhập lưu trong localStorage ", JSON.parse(user))

     setUser(data)
}
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
