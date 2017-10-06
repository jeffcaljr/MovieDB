import React from 'react'

import error404 from '../images/404-image.png'


const Route404 = () => {
    return(
        <div className="error-404-container container-fluid d-flex flex-column justify-content-around align-items-center p-5">
            <figure className="error-404-image-container">
                <img
                    src={error404}
                    alt="404 Error"
                    className="img-fluid"
                />
            </figure>

            <h1 className="error-404-label typeface-serif font-weight-bold">
                404
            </h1>

            <p className="small text-secondary typeface-sans-serif text-center font-italic">
                The page you requested could not be found.
            </p>

        </div>
    );


}

export default Route404;