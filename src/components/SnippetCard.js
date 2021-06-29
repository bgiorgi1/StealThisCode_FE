import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SnippetCard = (props) => {
    const snippet  = props.snippet;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/ShowSnippetDetails/${snippet._id}`}>
                        { snippet.title }
                    </Link>
                </h2>
                <h3>{snippet.body}</h3>
                <p>{snippet.language}</p>
                <p>{snippet.language}</p>
                <p>{snippet.language}</p>
            </div>
        </div>
    )
};

export default SnippetCard;