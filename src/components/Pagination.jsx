import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
          <a onClick={() => onPageChange(number)} className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
