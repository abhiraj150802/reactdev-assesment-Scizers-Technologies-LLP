
// Pagination.js
import React from 'react';

const Pagination = ({ page, setPage }) => {
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={page === 1}>Previous Page</button>
      <span>Page {page}</span>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;

