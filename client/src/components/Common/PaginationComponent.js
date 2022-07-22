import { memo, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import React from "react";

let PaginationComponent = (props) => {
    let active = parseInt(props.currentPage);

    let items = [];
    
    for (let number = 1; number <= props.totalPages; number++) {
        
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => (props.handlePageChange(number))}>
                {number}
            </Pagination.Item>,
        );
    }
    
    return <div>
            <Pagination>{items}</Pagination>
        </div>;
}

export default memo(PaginationComponent);