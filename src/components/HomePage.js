import React from 'react'


const HomePage = () => {

    return (
        <div className="root red-border">
            <div className="background">
                <div className="overlay">
                    <div className="content container-fluid">

                        <div className="jumbotron w-100 transparent text-white text-center">
                            <h1 className="display-3 serif">Jefflix</h1>
                            <p className="lead sans-serif">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4"/>
                                <p className="sans-serif text-muted">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                                {/*<p className="sans-serif"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et necessitatibus minus! Praesentium, tempore? Eveniet asperiores vel obcaecati debitis quibusdam rem, molestias neque non perferendis, error quas eum necessitatibus sunt!</div></p>*/}
                                <button className="btn btn-primary button-lg start-button sans-serif">Go to App</button>
                        </div>




                    </div>

                </div>

            </div>
        </div>
    );

}


export default HomePage