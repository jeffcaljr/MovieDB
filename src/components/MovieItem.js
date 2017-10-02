import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'
import FavoriteButton from "./FavoriteButton";


class MovieItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            favorite: props.movie.favorited
        }

        this.toggledFavorite = this.toggledFavorite.bind(this)
    }

    toggledFavorite = () =>{
        this.setState({favorite: !this.state.favorite}, this.props.movie.toggleFavorited());
    }

    render(){
        return (
            <div className="movie-item-container-single col-6 col-sm-2 col-md-4 col-lg-3 col-xl-2">
                <figure
                    className="movie-item image-btn-container"
                    onClick={() => this.props.onClick(this.props.movie)}>
                    <img src={this.props.movie.getImage() || cover} alt={this.props.movie.title || "Movie Cover"} className="movie-img"/>

                    <FavoriteButton isFavorite={this.props.movie.favorited} toggledFavorite={this.toggledFavorite}/>

                </figure>

            </div>
        );
    }
}


MovieItem.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
    onClick: PropTypes.func.isRequired
}

export default MovieItem;
