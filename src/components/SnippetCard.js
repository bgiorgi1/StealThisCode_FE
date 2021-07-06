import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SnippetCard = (props) => {
    const snippet  = props.snippet;

    return(
        <div className="card-container">
            <img src="https://smashicons.com/uploads/media/icon_thumbnail/0004/49/thumb_348710_icon_thumbnail_small.png" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/ShowSnippetDetails/${snippet._id}`}>
                        { snippet.title }
                    </Link>
                </h2>
                <p>{snippet.language}</p>
            </div>
        </div>
    )
};

export default SnippetCard;