import "./App.css";
import { useState } from "react";
import firebase from "./firebase"
import PromotionApi from "./api/PromotionAPI";
import { useEffect } from "react";
import swal from 'sweetalert';
import Routers from "./Router";
function App() {
  const [user, setUser] = useState(localStorage.getItem("userLogin"))
  const [listHangsx, setListHangsx] = useState([])
  const [listProduct, setListProduct] = useState([])
    
  

  const SetUserLogin = (data) => {
        

    // //lưu vào localStorage đổi obj thành json
    // localStorage.setItem('accessTokenLogin', JSON.stringify(data))
    // const user = localStorage.getItem('accessTokenLogin')

    // //Lấy từ trong localStorage được mã hóa lại
    // console.log("user đăng nhập lưu trong localStorage ", JSON.parse(user))

     setUser(data)
}


// // Test accessToken hết hạn
// let accessTokenLogin = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJ1c2VybmFtZVwiOlwiZHVvbmdkYW9cIixcInBhc3N3b3JkXCI6XCIkMmEkMTAkd204bS4xNnZ3dUhUQUxONnZtZ1A5T1lDTTZKTUVnR2FpSS9sWEQwNHkyT1lxOFFwZ1QydHlcIixcImFjdGl2YXRlZFwiOjEsXCJhZG1pblwiOjF9IiwiZXhwIjoxNjI3MjA4OTcxLCJpYXQiOjE2MjcxOTA5NzF9.vb9SeSbgwStkSKdiv7TVQe_sFwIc6AzkdQwZ8rbcsjBqWBY-PQgIjfahMwonn_d2DYjI6-ZzzxT3HwZkOFWtHg"
// localStorage.setItem('accessTokenLogin', accessTokenLogin)

useEffect(()=>{
  const testDateJwt = async() =>{
    try {
      const url = "/api/v2/admin/jwt"
      const response  = await PromotionApi.get(url)
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

// alert
var notification;
var container = document.querySelector('#notification-container');
var visible = false;
var queue = [];

function createNotification() {
    notification = document.createElement('div');
    var btn = document.createElement('button');
    var title = document.createElement('div');
    var msg = document.createElement('div');
    btn.className = 'notification-close';
    title.className = 'notification-title';
    msg.className = 'notification-message';
    btn.addEventListener('click', hideNotification, false);
    notification.addEventListener('animationend', hideNotification, false);
    notification.addEventListener('webkitAnimationEnd', hideNotification, false);
    notification.appendChild(btn);
    notification.appendChild(title);
    notification.appendChild(msg);
}

function updateNotification(type, title, message) {
    notification.className = 'notification notification-' + type;
    notification.querySelector('.notification-title').innerHTML = title;
    notification.querySelector('.notification-message').innerHTML = message;
}

function showNotification(type, title, message) {
    if (visible) {
        queue.push([type, title, message]);
        return;
    }
    if (!notification) {
        createNotification();
    }
    updateNotification(type, title, message);
    container.appendChild(notification);
    visible = true;
}

function hideNotification() {
    if (visible) {
        visible = false;
        container.removeChild(notification);
        if (queue.length) {
            showNotification.apply(null, queue.shift());
        }
    }
}


  return (
    <div>
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Nav SetUserLogin={SetUserLogin} user={user} setUser={setUser} listHangsx={listHangsx} setListHangsx={setListHangsx} showNotification={showNotification}/>
          </Route>
          <Route exact path="/admin" 
            render ={()=>{
              return isAuthenticate() && isAuthenticate().admin !==1 ? <Redirect to="/" />:  <AdminNav/>
          }}
          ></Route>
        </Switch>
      </Router> */}
      <Routers listHangsx={listHangsx}
        SetUserLogin={SetUserLogin}
        setUser={setUser}
        showNotification={showNotification}
        listProduct={listProduct}
        user={user}
        setListHangsx={setListHangsx}
        setListProduct={setListProduct}
        />
        
    </div>

  );
}

export default App;
