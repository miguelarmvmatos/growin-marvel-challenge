import React, { useState } from "react";

function Pagination({ charactersPerPage, totalcharacters, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalcharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="paginationWrapper">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page_link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
