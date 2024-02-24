import React from "react";

const LoginForm = () => {
  return (
    <form className="d-flex flex-column gap-3 p-3 bg-light rounded">
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        required
      />
      <input
        type="text"
        className="form-control"
        placeholder="Password"
        required
      />
      <button className="btn btn-primary">LOG IN</button>
      <p>
        Dont't have an account? <a href="/signup">Sign Up</a>{" "}
      </p>
    </form>
  );
};

export default LoginForm;
