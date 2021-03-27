import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "../Search/styles.css"

Search.propTypes = {
    onSubmit: PropTypes.func,
};

Search.defaultProp = {
    onSubmit: null,
};

function Search(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeOutRef = useRef(null);

    function handleSearchTermChange(e){
        const value = e.target.value;
        setSearchTerm(e.target.value);

        if(!onSubmit) return;

        if(typingTimeOutRef.current){
            clearTimeout(typingTimeOutRef.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };

            onSubmit(formValues);
        }, 300)
    }
    return (
        <form>
            <input
                className="search"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchTermChange} 
            />
        </form>
    );
}

export default Search;