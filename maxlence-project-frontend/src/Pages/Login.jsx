import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
      <a href="/">My Blogs</a>

      <LoginForm />
    </div>
  );
};

export default Login;
