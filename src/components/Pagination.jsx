import React from "react";

function Pagination({ currentPage, totalPages, onPageChange,hasData }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container" style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <a onClick={() => onPageChange(number)} className="page-link">
            {hasData && number === currentPage ? currentPage : number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
