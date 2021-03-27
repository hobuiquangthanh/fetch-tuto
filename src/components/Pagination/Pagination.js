import React from 'react';
import PropTypes from 'prop-types';
import "../Pagination/styles.css";

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProp = {
    onPageChange: null,
};

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        if(onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div className="pagination">
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>
            <button
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                Prev
            </button>
        </div>
    );
}

export default Pagination;