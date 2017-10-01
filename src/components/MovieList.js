import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";


class MovieList extends Component {
    constructor(){
        super()

        this.toggleMovieDetail = this.toggleMovieDetail.bind(this)

        this.state = {
            showModal: false
        }
    }

    toggleMovieDetail = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render(){
        return (
            <div className={this.props.className + " " + ((this.state.showModal) ? " no-scroll " : "scroll-y ")}>
                <MovieDetails
                    show={this.state.showModal}
                    onClick={this.toggleMovieDetail}/>

                <div className="row">
                    <MovieItem onClick={this.toggleMovieDetail}/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                </div>

            </div>
        );
    }
}

MovieList.propTypes = {
    className: PropTypes.string
}

MovieList.defaultProps = {
    className: ""
}

export default MovieList;