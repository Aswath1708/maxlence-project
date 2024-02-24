import React from "react";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
      <a href="/">My Blogs</a>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
