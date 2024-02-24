import React from "react";

const SignUpForm = () => {
  return (
    <form className="d-flex flex-column gap-3 p-3 bg-light rounded">
      <input
        type="text"
        name=""
        id=""
        className="form-control"
        placeholder="Username"
        required
      />
      <input
        type="text"
        name=""
        id=""
        className="form-control"
        placeholder="Email"
        required
      />
      <input type="password" className="form-control" placeholder="Password" required/>
      <div className="d-flex flex-row gap-2">
        {" "}
        <input type="radio" name="role" id="admin" />
        <label htmlFor="admin">Admin</label>
        <input type="radio" name="role" id="user" />
        <label htmlFor="user">User</label>
      </div>

      <button className="btn btn-primary">SIGN UP</button>
      <p>
        Already have an account? <a href="/login">Log In</a>{" "}
      </p>
    </form>
  );
};

export default SignUpForm;
