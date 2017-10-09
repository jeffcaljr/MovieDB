import React from 'react'
import {Link} from 'react-router-dom'

import BackgroundCarousel from "./BackgroundCarousel";
import moviedb_logo from '../../images/themoviedb_logo.png'



const HomePage = () => {

    return (
        <div className="root">
            <BackgroundCarousel children= {
                <div className="content ">

                    <div className="homepage-content-info w-100 text-white text-center">
                        <div className="homepage-content-scroll-area-outer">
                            <div className="homepage-content-scroll-area-inner">

                                <h1 className="display-3 serif">
                                    Jefflix
                                </h1>
                                <p className="lead sans-serif p-4">
                                    Discover &middot; Search &middot; Share
                                </p>
                                <hr className="my-4"/>
                                <img className="w-25 img-fluid "
                                     src={moviedb_logo}
                                     alt="Powered by TMDB"/>
                                <p className="sans-serif text-muted small">
                                    This product uses the TMDb API but is not endorsed or certified by TMDb.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="homepage-content-footer  w-100 text-right text-md-center">

                        <Link to="/home">
                            <button type="button" className="btn btn-primary button-lg start-button sans-serif text-white" role="button">

                                Go to App
                            </button>
                        </Link>

                    </div>


                </div>
            }>

            </BackgroundCarousel>
        </div>
    );

}


export default HomePage