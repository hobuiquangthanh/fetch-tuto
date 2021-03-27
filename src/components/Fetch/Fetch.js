import React from 'react';
import PropTypes from 'prop-types';
import '../Fetch/style.css';

Fetch.propTypes = {
    posts: PropTypes.array,
};

Fetch.defaultProps = {
    posts: [],
}

function Fetch(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map(posts =>(
                <ul className="fetch-list" key={posts.id}>
                    <li>
                        <b>Title: {posts.title}</b>
                        <p>Author: {posts.author}</p>
                    </li>
                    <li><img className="avatar" src={posts.imageUrl} /></li>
                </ul>
            ))}
        </div>
    );
}

export default Fetch;