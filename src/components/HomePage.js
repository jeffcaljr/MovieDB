import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = () => {

    return (
        <div className="root red-border">
            <div className="background">
                <div className="overlay">
                    <div className="content ">

                        <div className="homepage-content-info w-100 text-white text-center">
                            <div className="homepage-content-scroll-area-outer">
                                <div className="homepage-content-scroll-area-inner">

                                    <h1 className="display-3 serif">
                                        Jefflix
                                    </h1>
                                    <p className="lead sans-serif">
                                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                                    </p>
                                    <hr className="my-4"/>
                                    <p className="sans-serif text-muted">
                                        It uses utility classNamees for typography and spacing to space content out within the larger container.
                                    </p>
                                    <p className="sans-serif">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et necessitatibus minus! Praesentium, tempore? Eveniet asperiores vel obcaecati debitis quibusdam rem, molestias neque non perferendis, error quas eum necessitatibus sunt!
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="homepage-content-footer  w-100 text-right text-md-center">
                            <Link to="/home">
                                <a className="btn btn-primary button-lg start-button sans-serif text-white" role="button">

                                    Go to App
                                </a>
                            </Link>

                        </div>




                    </div>

                </div>

            </div>
        </div>
    );

}


export default HomePage