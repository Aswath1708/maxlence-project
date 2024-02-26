import React from "react";

const Pagination = ({ totalPosts, paginate,blogsPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination d-flex flex-wrap justify-content-center">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
