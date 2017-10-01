import React from 'react'
import PropTypes from 'prop-types'
import cover from '../movie_cover.jpg'

const MovieDetails = (props) => {


    if(props.show === true){
        return (
            <div className="movie-detail-container container">
                <div className="movie-info">
                    <header className="row">
                        <div className="col-11 title-container text-center">
                            <h3 className="title text-center text-white font-weight-bold">Movie Title Here</h3>
                        </div>

                        <div className="col-1 close-btn-container text-center">
                            <btn
                                className=" btn btn-sm modal-close-button"
                                onClick={props.onClick}>
                                <i className="fa fa-close text-white fa-2x"></i>
                            </btn>
                        </div>


                    </header>


                    <div className="row movie-info-content">
                        <div className="col-md-4">
                            <figure className="movie-img-container image-btn-container">
                                <img src={cover} alt="movie-cover" className="movie-info-image"/>
                                <a
                                    href="#"
                                    className="cover-button play-button"
                                    ><i className="fa fa-play fa-3x"></i></a>
                            </figure>
                            <div className="movie-rating clearfix">
                                <span className="rating-left pull-left">
                                    <span className="rating-img"><i className="fa fa-star text-white"></i></span>
                                    <span className="rating-value text-white">4.2</span>
                                </span>
                                <span className="rating-votes text-white pull-right">(1422)</span>
                            </div>
                            <div className="realese-date">
                                <p className="text-white text-center">Released: 2016</p>
                            </div>
                        </div>
                        <div className="col-md-8">

                            <div className="tagline-container">
                                <h4 className="tagline text-white text-center font-italic">Genius Has No Race</h4>
                            </div>

                            <div className="overview-container">
                                <p className="overview text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, blanditiis earum illo inventore libero, molestiae natus nisi pariatur perspiciatis quas quisquam quod reiciendis veritatis? Eligendi incidunt magni nemo porro voluptatem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    else{
        return null;
    }

}


MovieDetails.propTypes = {
    show: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired

}

export default MovieDetails;