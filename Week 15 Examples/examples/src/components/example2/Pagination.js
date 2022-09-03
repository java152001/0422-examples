import React from 'react';
import { Button } from '@mui/material';

const Pagination = ({ items, pageSize, onPageChange }) => {
    // Part 2 code goes here

    if (items.length <= 1) {
        return null
    }

    const range = (start, end) => {
        return Array(end - start + 1)
          .fill(0)
          .map((item, i) => start + i);
      };

    let numPages = Math.ceil(items.length / pageSize);

    let pages = range(1, numPages + 1 );

    const list = pages.map(page => {
        return (
            <Button key={page} onClick={onPageChange} className="page-item">
                {page}
            </Button>
        )
    });
    return (
        <nav>
            <ul className="pagination">{list}</ul>
        </nav>
    )
};

export default Pagination;