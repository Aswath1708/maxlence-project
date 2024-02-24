import React from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

const Login = () => {
  return (
    <div
      className="d-flex flex-column gap-5 justify-content-center align-items-center bg-info"
      style={{ height: "100vh" }}
    >
      <Header />

      <LoginForm />
    </div>
  );
};

export default Login;
