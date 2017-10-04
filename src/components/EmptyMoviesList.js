import React from 'react'
import noResultsImg from '../images/no-results-image.png'


const EmptyMoviesList = () => {
    return(
        <div className="empty-list-view d-flex flex-column justify-content-center align-items-center">

            <img className="w-50 img-fluid" src={noResultsImg} alt="No Movies Found"/>
            <h3 className="text-white text-center text-muted">No Movies Found</h3>
        </div>
    );
}

export default EmptyMoviesList;