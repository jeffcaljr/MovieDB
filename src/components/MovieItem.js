import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'
import FavoriteButton from "./FavoriteButton";
import {show} from "../actions/MovieDetailModal";



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
            <div className="movie-item-container-single col-6 col-sm-3 col-md-4 col-lg-3 col-xl-2">
                <figure
                    className="movie-item image-btn-container"
                    onClick={() => this.props.openDetailModal()}>
                    <img src={this.props.movie.getImage() || cover} alt={this.props.movie.title || "Movie Cover"} className="movie-img"/>

                    <FavoriteButton isFavorite={this.props.movie.favorited} toggledFavorite={this.toggledFavorite}/>

                </figure>

            </div>
        );
    }
}


MovieItem.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
}

const mapStateToProps = state => {
    return{

    }
}

const mapDispatchToProps = (dispatch, ownprops) => {
    return {

        openDetailModal: () => {
            dispatch(show(ownprops.movie))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
