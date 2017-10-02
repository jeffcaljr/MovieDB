import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FavoriteButton extends Component {
    constructor(props) {
        super(props)

        this.toggledFavorite = this.toggledFavorite.bind(this)
    }

    toggledFavorite(e){
        e.stopPropagation()
        this.notifyParent()
    }

    notifyParent(){
        if(this.props.toggledFavorite){
            this.props.toggledFavorite()
        }
    }

    render(){
        return (
            <a
                className="btn like-button like-button btn-sm borderless"
                href="#"
                onClick={(e) => {this.toggledFavorite(e)}}>
                {this.props.isFavorite ? <i className="fa fa-heart text-red"></i> : <i className="fa fa-heart-o text-red"></i>}
            </a>
        );
    }



}

FavoriteButton.propTypes = {
    isFavorite: PropTypes.bool.isRequired,
    toggledFavorite: PropTypes.func
}


export default FavoriteButton;