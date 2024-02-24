import React from "react";

const NavBar = () => {
  return (
    <div className="navbar navbar-brand w-100 py-3 px-5 bg-dark text-white">
      <p>My Blogs</p>
      <ul className="d-flex flex-row align-items-center gap-5 list-unstyled">
        <li>
          <select name="" id="" className="bg-dark text-white border-0">
            <option value="">Admin</option>
            <option value="">User</option>
          </select>
        </li>
        <li className="nav-item">
          {" "}
          <a href="/login" className="nav-link text-white">
            {" "}
            Log-out{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
