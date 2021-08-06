// import jwt from "jsonwebtoken";
export const isAuthenticate = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"))
    if(user === "undefined") return false;
    return user
};