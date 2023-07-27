import React from "react";

const MovieList = ({ data }) => {
    return (
        <ul className="list-group">
            {data.movieNames.map((movieName, index) => (
                <li key={index} className="list-group-item">
                    {movieName}
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
