import React from "react";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <div
      className="d-flex flex-column gap-5 justify-content-center align-items-center bg-info"
      style={{ height: "100vh" }}
    >
      <Header />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
